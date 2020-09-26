package com.ty.dc.service;

import com.ty.dc.entity.Order;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author wen
 * @since 2020-09-21
 */
public interface IOrderService extends IService<Order> {

    List<Order> getOrderMinX(int minOrder);

}
