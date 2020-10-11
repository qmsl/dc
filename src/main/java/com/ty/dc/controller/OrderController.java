package com.ty.dc.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.ty.dc.base.BaseController;
import com.ty.dc.entity.Combo;
import com.ty.dc.entity.Order;
import com.ty.dc.interceptor.AuthenticationInterceptor;
import com.ty.dc.service.IComboService;
import com.ty.dc.service.IOrderService;
import com.ty.dc.utils.AjaxResult;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author wen
 * @since 2020-09-21
 */
@Log
@RestController
@RequestMapping("/dc/order")
public class OrderController extends BaseController {

    @Autowired
    private IOrderService orderService;

    @Autowired
    private IComboService comboService;

    //获取今日订单，取餐和评价时候使用
    @RequestMapping("getTodayOrder")
    public AjaxResult getTodayOrder(Long day) {
        String uid = getRequest().getAttribute(AuthenticationInterceptor.USER_KEY).toString();
        Order order = orderService.getOne(new QueryWrapper<Order>()
                .eq("order_date", LocalDate.now().plusDays(day))
                .eq("user_id", uid)
        );
        return AjaxResult.success(order);
    }

    //订单评价
    @RequestMapping("eveOrder")
    public AjaxResult eveOrder(Long orderId, Double eveScore, String eveDesc) {
        String uid = getRequest().getAttribute(AuthenticationInterceptor.USER_KEY).toString();
        Order order = orderService.getById(orderId);
        if (null == order || !order.getUserId().equals(uid)) {
            return AjaxResult.error("订单不正确！");
        }
        if (null != order.getEveScore() || null != order.getEveDesc()) {
            return AjaxResult.error("重复评价！");
        }
        order.setEveScore(eveScore);
        order.setEveDesc(eveDesc);
        boolean isOk = orderService.updateById(order);

        return AjaxResult.success(isOk);
    }

    //获取我的订单列表
    @RequestMapping("list")
    public AjaxResult list() {
        String uid = getRequest().getAttribute(AuthenticationInterceptor.USER_KEY).toString();
        startPage();
        List<Order> list = orderService.list(new QueryWrapper<Order>()
                .eq("user_id", uid)
                .lt("order_date",LocalDate.now())
                .orderByDesc("order_date"));
        return AjaxResult.success(getDataTable(list));
    }

    //修改订单
    @RequestMapping("mod")
    public AjaxResult mod(Long orderId, Long comboId) {

       /* LocalTime endTime = LocalTime.of(16,0);
        if(LocalTime.now().isAfter(endTime)){
            return AjaxResult.error("修改订单失败，截止时间16:00！");
        }*/

        Order order = orderService.getById(orderId);
        if (null == order) {
            return AjaxResult.error("订单不正确！");
        }

        if (order.getStatus().equals("0")) {
            return AjaxResult.error("订单已确定，不允许修改！");
        }

        Combo combo = comboService.getById(comboId);
        if (null == combo) {
            return AjaxResult.error("套餐不存在！");
        }
        order.setStatus("1");
        order.setComboName(combo.getComboName());
        order.setComboCode(combo.getComboCode());
        order.setComboType(combo.getComboType());
        order.setComboId(comboId);
        order.setComboImg(combo.getComboImg());
        //order.setOrderNum(combo.getComboCode() + "-" + DateUtils.dateTimeNow());

        boolean isOk = orderService.updateById(order);
        return AjaxResult.success(isOk);
    }

    //增加订单
    @RequestMapping("add")
    public AjaxResult add(Long comboId) {

        /*LocalTime endTime = LocalTime.of(14,0);
        if(LocalTime.now().isAfter(endTime)){
            return AjaxResult.error("下单失败，截止时间14:00！");
        }*/

        String uid = getRequest().getAttribute(AuthenticationInterceptor.USER_KEY).toString();

        int orderCount = orderService.count(new QueryWrapper<Order>()
                .eq("order_date", LocalDate.now().plusDays(0L))
                .eq("user_id", uid)
        );

        if (orderCount > 0) {
            return AjaxResult.error("下单失败，每天只允许下单一次！");
        }

        Combo combo = comboService.getById(comboId);
        if (null == combo) {
            return AjaxResult.error("套餐不存在!");
        }

        Order order = new Order();
        order.setUserId(uid);
        order.setStatus("1");
        order.setNum(1);
        order.setComboName(combo.getComboName());
        order.setComboCode(combo.getComboCode());
        order.setComboType(combo.getComboType());
        order.setComboId(comboId);
        order.setComboImg(combo.getComboImg());
        //order.setOrderNum(combo.getComboCode() + "-" + DateUtils.dateTimeNow());
        order.setOrderDate(LocalDate.now());

        boolean isOk = orderService.save(order);
        return AjaxResult.success(isOk);
    }

    //删除订单
    @RequestMapping("del")
    public AjaxResult del(Long id) {
        String uid = getRequest().getAttribute(AuthenticationInterceptor.USER_KEY).toString();
        Order order = orderService.getById(id);
        if (null == order || !order.getUserId().equals(uid)) {
            return AjaxResult.error("订单不正确");
        }
        boolean isOk = orderService.removeById(id);
        return AjaxResult.success(isOk);
    }

    //取消订单
    @RequestMapping("cancel")
    public AjaxResult cancel(Long id) {
        String uid = getRequest().getAttribute(AuthenticationInterceptor.USER_KEY).toString();
        Order order = orderService.getById(id);
        if (null == order || !order.getUserId().equals(uid)) {
            return AjaxResult.error("订单不正确");
        }
        order.setStatus("2");
        boolean isOk = orderService.updateById(order);
        return AjaxResult.success(isOk);
    }

}
