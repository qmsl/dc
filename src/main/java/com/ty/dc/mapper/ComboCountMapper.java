package com.ty.dc.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.ty.dc.entity.ComboCount;
import com.ty.dc.entity.GoodsCount;

import java.util.Date;
import java.util.HashMap;
import java.util.List;

/**
 * <p>
 * Mapper 接口
 * </p>
 *
 * @author wen
 * @since 2020-10-11
 */
public interface ComboCountMapper extends BaseMapper<ComboCount> {

    List<ComboCount> listComboCount(Date startDate, Date endDate);

    List<GoodsCount> getOrderCnt(Date startDate, Date endDate);
}
