package com.ty.dc.service;

import com.ty.dc.entity.Combo;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author wen
 * @since 2020-09-24
 */
public interface IComboService extends IService<Combo> {

    List<HashMap> getComboCount();

    List<Combo> listCombo(Combo combo);

    Combo getByIdCustom(long id);
}
