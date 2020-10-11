package com.ty.dc.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.ty.dc.entity.Combo;
import com.ty.dc.service.IComboService;
import com.ty.dc.utils.AjaxResult;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import com.ty.dc.service.IComboCountService;
import com.ty.dc.entity.ComboCount;
import org.springframework.beans.BeanUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import com.ty.dc.base.BaseController;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author wen
 * @since 2020-10-11
 */
@RestController
@RequestMapping("/dc/comboCount")
public class ComboCountController extends BaseController {

    @Autowired
    private IComboService comboService;

    @Autowired
    private IComboCountService comboCountService;

    //获取历史订单统计数据
    @RequestMapping("list")
    public AjaxResult list(ComboCount comboCount) {
        startPage();
        List<ComboCount> list = comboCountService.list(new QueryWrapper<>(comboCount));
        return AjaxResult.success(getDataTable(list));
    }

    //获取今日订单统计数据
    @RequestMapping("getTodayOrderCnt")
    public AjaxResult getTodayOrderCnt() {
        List<Combo> combos = comboService.list(new QueryWrapper<Combo>().eq("status","1"));
        List<HashMap> retval = comboService.getComboCount();
        List<ComboCount> comboCounts = new ArrayList<>(combos.size());
        ComboCount comboCount;
        for(Combo combo : combos){
            comboCount = new ComboCount();
            BeanUtils.copyProperties(combo,comboCount);
            comboCount.setOrderDate(LocalDate.now());
            comboCount.setCount(0);//先设置为0，如果有数据下面就设置成实际数量
            for(HashMap map : retval){
                if(map.get("id").toString().equals(combo.getId().toString())){
                    comboCount.setCount((Integer)map.get("cnt"));
                }
            }
            comboCounts.add(comboCount);
        }
        return AjaxResult.success(comboCounts);
    }

}
