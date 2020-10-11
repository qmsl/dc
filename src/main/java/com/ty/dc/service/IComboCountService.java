package com.ty.dc.service;

import com.ty.dc.entity.ComboCount;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.Date;
import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author wen
 * @since 2020-10-11
 */
public interface IComboCountService extends IService<ComboCount> {

    List<ComboCount> listComboCount(Date startDate, Date endDate);
}