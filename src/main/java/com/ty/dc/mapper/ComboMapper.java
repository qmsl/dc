package com.ty.dc.mapper;

import com.ty.dc.entity.Combo;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author wen
 * @since 2020-09-24
 */
public interface ComboMapper extends BaseMapper<Combo> {

    List<HashMap> getComboCount();

    List<Combo> listCombo(Combo combo);
}
