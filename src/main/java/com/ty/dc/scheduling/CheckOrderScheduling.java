package com.ty.dc.scheduling;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.ty.dc.entity.Order;
import com.ty.dc.service.IOrderService;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.List;

/**
 * Created by wen on 2020-9-25.
 */
@Component
@Log
public class CheckOrderScheduling {

    //点餐截止时间为14点整，订单截止修改时间16点
    @Autowired
    private IOrderService orderService;

    @Scheduled(cron = "0 1/5 14-16 * * ?")
    void preCheckOrder() {

        //首先把所有订单改状态为1(新下单)改成0(已确认)状态,此时不可以新建订单了
        boolean isOk = orderService.update(new UpdateWrapper<Order>().set("status", "0")
                .eq("order_date", LocalDate.now()).eq("status", "1")
        );

        //然后把所有订餐数量不超过 5 的订单找出来，把状态改回 1， 可以修改状态
        List<Order> orders = orderService.getOrderMinX(5);
        for (Order order : orders) {
            order.setStatus("1");
            orderService.updateById(order);
        }
    }

    //定时器有间隔，最后几分钟的修改就更新不到，所以最后在确定下
    @Scheduled(cron = "10 0 17 * * ?")
    void finalCheckOrder() {
        preCheckOrder();//最后执行一次，这次还没有达到额定份数的订单就给取消掉
        List<Order> orders = orderService.list(new QueryWrapper<Order>()
                .eq("order_date", LocalDate.now()).eq("status", "1")
        );

        for (Order order : orders) {
            order.setStatus("2");//把状态修改为已取消状态
            orderService.updateById(order);
        }
    }
}
