package com.ty.dc.service.impl;

import com.ty.dc.entity.Order;
import com.ty.dc.mapper.OrderMapper;
import com.ty.dc.service.IOrderService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author wen
 * @since 2020-09-21
 */
@Service
public class OrderServiceImpl extends ServiceImpl<OrderMapper, Order> implements IOrderService {

    @Override
    public List<Order> getOrderMinX(int minOrder) {
        return baseMapper.getOrderMinX(minOrder);
    }
}
