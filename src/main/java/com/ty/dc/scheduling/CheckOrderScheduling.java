package com.ty.dc.scheduling;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.ty.dc.entity.Combo;
import com.ty.dc.entity.ComboCount;
import com.ty.dc.entity.Order;
import com.ty.dc.service.IComboCountService;
import com.ty.dc.service.IComboService;
import com.ty.dc.service.IOrderService;
import com.ty.dc.weixin.WxCpConfiguration;
import lombok.extern.java.Log;
import me.chanjar.weixin.common.error.WxErrorException;
import me.chanjar.weixin.cp.api.WxCpService;
import me.chanjar.weixin.cp.bean.WxCpMessage;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * Created by wen on 2020-9-25.
 */
@Component
@Log
public class CheckOrderScheduling {

    @Autowired
    private IOrderService orderService;

    @Autowired
    private IComboCountService comboCountService;

    @Autowired
    private IComboService comboService;

    //点餐截止时间为14点整，订单截止修改时间16点
    @Scheduled(cron = "0 0/10 14-16 * * ?")
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
    }

    //定时器有间隔，最后几分钟的修改就更新不到，所以最后在确定下
    @Scheduled(cron = "1 0 17 * * ?")
    void finalCheckOrder() {
        preCheckOrder();//最后执行一次，这次还没有达到额定份数的订单就给取消掉
        List<Order> orders = orderService.list(new QueryWrapper<Order>()
                .eq("order_date", LocalDate.now()).eq("status", "1")
        );

        for (Order order : orders) {
            order.setStatus("2");//把状态修改为已取消状态
            orderService.updateById(order);
        }
        wxMsgSend(orders, "您的订餐订单因数量不足5份被取消！");

        initComboCount();//把当天的订单统计数据归档，方便查询
    }


    void initComboCount() {
        List<Combo> combos = comboService.list(new QueryWrapper<Combo>().eq("status", "1"));
        List<HashMap> retval = comboService.getComboCount();
        List<ComboCount> comboCounts = new ArrayList<>(combos.size());
        ComboCount comboCount;
        for (Combo combo : combos) {
            comboCount = new ComboCount();
            BeanUtils.copyProperties(combo, comboCount);
            comboCount.setOrderDate(LocalDate.now());
            comboCount.setCount(0);//先设置为0，如果有数据下面就设置成实际数量
            for (HashMap map : retval) {
                if (map.get("id").toString().equals(combo.getId().toString())) {
                    comboCount.setCount((Integer) map.get("cnt"));
                }
            }
            comboCounts.add(comboCount);
        }

        comboCountService.saveBatch(comboCounts);
    }

    void wxMsgSend(List<Order> orders, String msg) {
        if (null == orders || orders.size() < 1) {
            return;
        }

        String uid = "";
        for (Order order : orders) {
            uid += order.getUserId() + "|";
        }

        log.info("订单被取消消息通知！uid=" + uid);

        try {
            WxCpService wxCpService = WxCpConfiguration.getCpService(1000033);
            wxCpService.messageSend(WxCpMessage
                    .TEXT()
                    .agentId(1000033) // 企业号应用ID
                    .toUser(uid.substring(0, uid.length() - 1))
                    .content(msg)
                    .build());
        } catch (WxErrorException e) {
            log.warning("发送微信消息失败！" + e.getMessage());
        }
    }
}
