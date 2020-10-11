package com.ty.dc.service.impl;

import com.ty.dc.entity.Combo;
import com.ty.dc.mapper.ComboMapper;
import com.ty.dc.service.IComboService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author wen
 * @since 2020-09-24
 */
@Service
public class ComboServiceImpl extends ServiceImpl<ComboMapper, Combo> implements IComboService {

    @Override
    public List getComboCount() {
        return baseMapper.getComboCount();
    }

    @Override
    public List<Combo> listCombo(Combo combo) {
        return baseMapper.listCombo(combo);
    }
}
