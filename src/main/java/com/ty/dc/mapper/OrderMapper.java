package com.ty.dc.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.ty.dc.entity.Order;

import java.util.Date;
import java.util.HashMap;
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

    List<HashMap> getOrderScoreMin(Date startDate, Date endDate, int num);

    List<HashMap> getOrderScoreMax(Date startDate, Date endDate, int num);

    List<HashMap> getOrderPersonCnt(Date startDate, Date endDate);
}
