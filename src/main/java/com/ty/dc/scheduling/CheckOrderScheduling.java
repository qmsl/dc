package com.ty.dc.scheduling;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.ty.dc.entity.Combo;
import com.ty.dc.entity.ComboCount;
import com.ty.dc.entity.Order;
import com.ty.dc.service.IComboCountService;
import com.ty.dc.service.IComboService;
import com.ty.dc.service.IOrderService;
import com.ty.dc.utils.StringUtils;
import com.ty.dc.weixin.WxCpConfiguration;
import lombok.extern.java.Log;
import me.chanjar.weixin.common.error.WxErrorException;
import me.chanjar.weixin.cp.api.WxCpService;
import me.chanjar.weixin.cp.bean.WxCpMessage;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by wen on 2020-9-25.
 */
@Component
@Log
public class CheckOrderScheduling {

    @Autowired
    private IOrderService orderService;

    private HashSet<String> users = new HashSet<>();

    //点餐截止时间为14点整，订单截止修改时间16点
    @Scheduled(cron = "0/10 * 14-15 * * ?")
    void preCheckOrder() {

        //首先把所有订单改状态为1(新下单)改成0(已确认)状态,此时不可以新建订单了
        orderService.update(new UpdateWrapper<Order>()
                .set("status", "0")
                .setSql("order_num = CONCAT(combo_code,\"-\",100000+id)")
                .eq("order_date", LocalDate.now()).eq("status", "1")
        );

        //然后把所有订餐数量不超过 5 的订单找出来，把状态改回1（可以修改状态）
        List<Order> orders = orderService.getOrderMinX(5);
        for (Order order : orders) {
            order.setStatus("1");
            orderService.updateById(order);
        }

        wxMsgSend(orders, "您的订餐订单因套餐总订餐数量不足5份被取消，请您及时更改订单套餐！");
        users.addAll(orders.stream().map(Order::getUserId).collect(Collectors.toList()));//把已经发送通知的用户缓存起来，避免重复发送通知
    }

    //定时器有间隔，最后几分钟的修改就更新不到，所以最后在确定下
    @Scheduled(cron = "0 0 16 * * ?")
    void finalCheckOrder() {
        preCheckOrder();//最后执行一次，这次还没有达到额定份数的订单就给取消掉
        List<Order> orders = orderService.list(new QueryWrapper<Order>()
                .eq("order_date", LocalDate.now()).eq("status", "1")
        );

        for (Order order : orders) {
            order.setStatus("2");//把状态修改为已取消状态
            orderService.updateById(order);
        }

        users.clear();//最后一次处理完成后清理缓存的已经发送通知的用户,先清理掉缓存，避免最后一次取消订单消息没有发送出去

        wxMsgSend(orders, "您的订餐订单因数量不足5份被取消！");

    }

    void wxMsgSend(List<Order> orders, String msg) {
        if (null == orders || orders.size() < 1) {
            return;
        }

        String uid = "";
        for (Order order : orders) {
            if (users.contains(order.getUserId())) {
                continue;
            }
            uid += order.getUserId() + "|";
        }

        if(StringUtils.isEmpty(uid)){
            return;
        }
        log.info("订单被取消消息通知！uid=" + uid);

        try {

            WxCpService wxCpService = WxCpConfiguration.getCpService(1000033);
            wxCpService.messageSend(WxCpMessage
                    .TEXT()
                    .toUser(uid.substring(0, uid.length() - 1))
                    .content(msg)
                    .build());
        } catch (WxErrorException e) {
            log.warning("发送微信消息失败！" + e.getMessage());
        }
    }
}
