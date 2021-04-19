package com.ty.dc.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.ty.dc.base.BaseController;
import com.ty.dc.entity.Combo;
import com.ty.dc.entity.Order;
import com.ty.dc.entity.User;
import com.ty.dc.interceptor.AuthenticationInterceptor;
import com.ty.dc.service.IComboService;
import com.ty.dc.service.IOrderService;
import com.ty.dc.service.IUserService;
import com.ty.dc.utils.AjaxResult;
import com.ty.dc.utils.ExcelUtil;
import com.ty.dc.utils.Global;
import com.ty.dc.utils.file.FileUtils;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Date;
import java.util.HashMap;
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

    @Autowired
    private IUserService userService;

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

        if (null == order || order.getOrderDate().isAfter(LocalDate.now().plusDays(1))) {
            return AjaxResult.error("未使用订单暂不允许评价！");
        }

        if (null != order.getEveScore() || null != order.getEveDesc()) {
            return AjaxResult.error("重复评价！");
        }
        order.setEveScore(eveScore);
        order.setEveDesc(eveDesc);
        boolean isOk = orderService.updateById(order);

        return AjaxResult.status(isOk);
    }

    //获取我的当前订单列表
    @RequestMapping("listCur")
    public AjaxResult listCurrent(String... status) {
        String uid = getRequest().getAttribute(AuthenticationInterceptor.USER_KEY).toString();
        startPage();
        List<Order> list = orderService.list(new LambdaQueryWrapper<Order>()
                .eq(Order::getUserId, uid)
                .in(Order::getStatus, status)
                .ge(Order::getOrderDate, LocalDate.now())
                .orderByAsc(Order::getOrderDate));
        return AjaxResult.success(getDataTable(list));
    }

    //获取我的历史订单列表
    @RequestMapping("listHis")
    public AjaxResult listHistory(String... status) {
        String uid = getRequest().getAttribute(AuthenticationInterceptor.USER_KEY).toString();
        startPage();
        List<Order> list = orderService.list(new LambdaQueryWrapper<Order>()
                .eq(Order::getUserId, uid)
                .in(Order::getStatus, status)
                .le(Order::getOrderDate, LocalDate.now())
                .orderByAsc(Order::getOrderDate));
        return AjaxResult.success(getDataTable(list));
    }


    //修改订单
    @RequestMapping("mod")
    public AjaxResult mod(Long orderId, Long comboId) {

        Order order = orderService.getById(orderId);
        if (null == order) {
            return AjaxResult.error("订单不正确！");
        }

        LocalDateTime endTime = LocalDateTime.of(LocalDate.now(), LocalTime.of(16, 0));
        LocalDateTime orderDate = LocalDateTime.of(order.getOrderDate(), LocalTime.now());

        if (orderDate.toLocalDate().isBefore(endTime.toLocalDate().plusDays(1))) {//明天之前的订单直接不允许修改
            return AjaxResult.error("修改订单失败，截止时间为前一天16:00！");
        }

        if(orderDate.toLocalDate().isEqual(LocalDate.now().plusDays(1)) && LocalTime.now().isAfter(endTime.toLocalTime())){
            return AjaxResult.error("修改订单失败，截止时间为前一天16:00！");
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
        return AjaxResult.status(isOk);
    }

    //增加订单
    @RequestMapping("add")
    public AjaxResult add(Long comboId, String date) {

        LocalDateTime orderDate = LocalDateTime.now();
        if (null != date) {
            orderDate = LocalDateTime.of(LocalDate.parse(date), LocalTime.now());
        }

        //如果是第二天的订单，必须在前一天下午3点之前下单
        LocalDateTime endTime = LocalDateTime.of(LocalDate.now(), LocalTime.of(15, 0));

        if (orderDate.toLocalDate().isBefore(endTime.toLocalDate().plusDays(1))) {//明天之前的订单直接不允许下单
            return AjaxResult.error("下单失败，截止时间为前一天15:00之前！");
        }

        if(orderDate.toLocalDate().isEqual(LocalDate.now().plusDays(1)) && LocalTime.now().isAfter(endTime.toLocalTime())){
            return AjaxResult.error("下单失败，截止时间为前一天15:00之前！");
        }

        String uid = getRequest().getAttribute(AuthenticationInterceptor.USER_KEY).toString();

        int orderCount = orderService.count(new QueryWrapper<Order>()
                .eq("order_date", orderDate.toLocalDate())
                .eq("user_id", uid)
        );

        if (orderCount > 0) {
            return AjaxResult.error("下单失败，当天已经下单！");
        }

        Combo combo = comboService.getById(comboId);
        if (null == combo) {
            return AjaxResult.error("套餐不存在!");
        }

        User user = userService.getOne(new QueryWrapper<User>().eq("uid", uid));

        Order order = new Order();
        order.setUserId(uid);
        order.setUserName(null == user.getName() ? "" : user.getName());
        order.setStatus("1");
        order.setNum(1);
        order.setComboName(combo.getComboName());
        order.setComboCode(combo.getComboCode());
        order.setComboType(combo.getComboType());
        order.setComboId(comboId);
        order.setComboImg(combo.getComboImg());
        order.setCookName(combo.getCookName());
        //order.setOrderNum(combo.getComboCode() + "-" + DateUtils.dateTimeNow());
        order.setOrderDate(orderDate.toLocalDate());

        boolean isOk = orderService.save(order);
        return AjaxResult.status(isOk);
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
        return AjaxResult.status(isOk);
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
        return AjaxResult.status(isOk);
    }

    //统计各菜品的点评人数
    @RequestMapping("getOrderPersonCnt")
    public AjaxResult getOrderPersonCnt(Date startDate, Date endDate) {
        List<HashMap> data = orderService.getOrderPersonCnt(startDate, endDate);
        return AjaxResult.success(data);
    }

    //星级最高/低的N个菜品  type=1最高；=2最低；num 多少个
    @RequestMapping("getOrderScore")
    public AjaxResult getOrderScore(Date startDate, Date endDate, String type, int num) {
        List<HashMap> data = orderService.getOrderScore(startDate, endDate, type, num);
        return AjaxResult.success(data);
    }

    //通过商品ID查询评价列表.前端没用
    @RequestMapping("getOrderByGoodsId")
    public AjaxResult getOrderByGoodsId(long goodsId) {
        startPage();
        List<Order> orders = orderService.getOrderByGoodsId(goodsId);
        //List<Order> orders = orderService.list(new QueryWrapper<Order>().eq("combo_id",comboId));
        return AjaxResult.success(getDataTable(orders));
    }

    //点评人员list接口，获取每个用户的统计信息明细
    @RequestMapping("getUserEveCountList")
    public AjaxResult getUserEveCountList() {
        startPage();
        List<HashMap> list = orderService.getUserEveCountList();
        return AjaxResult.success(getDataTable(list));
    }

    //获取订单信息/用户的评价 都可以获取
    @RequestMapping("query")
    public AjaxResult query(Order order) {
        startPage();
        order.setStatus("0");
        List<Order> list = orderService.list(new QueryWrapper<>(order));
        return AjaxResult.success(getDataTable(list));
    }

    //获取订单信息/根据状态查询
    @RequestMapping("qryOrderByDate")
    public AjaxResult query(String orderDate, String... orderStatus) {
        LocalDate date = LocalDate.parse(orderDate);
        List<Order> list = orderService.list(new QueryWrapper<Order>()
                .eq("order_date", date)
                .in("status", orderStatus)
        );
        return AjaxResult.success(list);
    }

    //获取订单统计数据，前端传入时间段进行查询，查询当天的传当天的日期给startDate
    @RequestMapping("exportOrderByDate")
    public void export(String orderDate, HttpServletResponse response, String... orderStatus) throws IOException {
        LocalDate date = LocalDate.parse(orderDate);
        List<Order> list = orderService.list(new QueryWrapper<Order>()
                .eq("order_date", date)
                .in("status", orderStatus)
        );

        ExcelUtil<Order> util = new ExcelUtil<>(Order.class);

        AjaxResult ajaxResult = util.exportExcel(list, "当日订单统计");
        String downloadPath = Global.getDownloadPath() + ajaxResult.get("msg").toString();
        response.setContentType(MediaType.APPLICATION_OCTET_STREAM_VALUE);
        FileUtils.setAttachmentResponseHeader(response, ajaxResult.get("msg").toString());
        FileUtils.writeBytes(downloadPath, response.getOutputStream());
        FileUtils.deleteFile(downloadPath);
    }

}
