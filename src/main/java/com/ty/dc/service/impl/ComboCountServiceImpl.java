package com.ty.dc.service.impl;

import com.ty.dc.entity.ComboCount;
import com.ty.dc.mapper.ComboCountMapper;
import com.ty.dc.service.IComboCountService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author wen
 * @since 2020-10-11
 */
@Service
public class ComboCountServiceImpl extends ServiceImpl<ComboCountMapper, ComboCount> implements IComboCountService {

    @Override
    public List<ComboCount> listComboCount(Date startDate, Date endDate) {
        return baseMapper.listComboCount(startDate, endDate);
    }

    @Override
    public List<HashMap> getOrderCnt(Date startDate, Date endDate) {
        return baseMapper.getOrderCnt(startDate, endDate);
    }
}
