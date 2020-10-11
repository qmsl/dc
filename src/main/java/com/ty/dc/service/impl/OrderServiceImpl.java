package com.ty.dc.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.ty.dc.entity.Order;
import com.ty.dc.mapper.OrderMapper;
import com.ty.dc.service.IOrderService;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;

/**
 * <p>
 * 服务实现类
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

    @Override
    public List<HashMap> getOrderPersonCnt(Date startDate, Date endDate) {
        return baseMapper.getOrderPersonCnt(startDate, endDate);
    }

    @Override
    public List<HashMap> getOrderScore(Date startDate, Date endDate, String type, int num) {
        if (type.equals("1")) {
            return baseMapper.getOrderScoreMax(startDate, endDate, num);
        } else {
            return baseMapper.getOrderScoreMin(startDate, endDate, num);
        }

    }
}
