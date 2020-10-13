package com.ty.dc.mapper;

import com.ty.dc.entity.Goods;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author wen
 * @since 2020-09-24
 */
public interface GoodsMapper extends BaseMapper<Goods> {

    List<Goods> getByComboId(Long comboId);
}
