package com.ty.dc.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.ty.dc.entity.Order;

import java.util.List;

/**
 * <p>
 * Mapper 接口
 * </p>
 *
 * @author wen
 * @since 2020-09-21
 */
public interface OrderMapper extends BaseMapper<Order> {

    List<Order> getOrderMinX(int minOrder);

}
