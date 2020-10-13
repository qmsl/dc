package com.ty.dc.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.ty.dc.entity.Goods;
import com.ty.dc.mapper.GoodsMapper;
import com.ty.dc.service.IGoodsService;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author wen
 * @since 2020-09-24
 */
@Service
public class GoodsServiceImpl extends ServiceImpl<GoodsMapper, Goods> implements IGoodsService {

    @Override
    public List<Goods> getByComboId(Long comboId) {
        return baseMapper.getByComboId(comboId);
    }

}
