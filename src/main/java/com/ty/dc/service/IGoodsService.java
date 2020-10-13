package com.ty.dc.service;

import com.ty.dc.entity.Goods;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author wen
 * @since 2020-09-24
 */
public interface IGoodsService extends IService<Goods> {

    List<Goods> getByComboId(Long comboId);

}
