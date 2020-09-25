package com.ty.dc.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.ty.dc.base.BaseController;
import com.ty.dc.entity.Combo;
import com.ty.dc.entity.ComboGoods;
import com.ty.dc.service.IComboGoodsService;
import com.ty.dc.service.IComboService;
import com.ty.dc.utils.AjaxResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author wen
 * @since 2020-09-24
 */
@RestController
@RequestMapping("/dc/combo")
public class ComboController extends BaseController {

    @Autowired
    private IComboService comboService;

    @Autowired
    private IComboGoodsService comboGoodsService;

    @RequestMapping("list")
    public AjaxResult list() {
        List<Combo> list = comboService.selectCombos();
        return AjaxResult.success(list);
    }

    @RequestMapping("query")
    public AjaxResult query(Combo combo) {
        List<Combo> list = comboService.list(new QueryWrapper<>(combo));
        return AjaxResult.success(list);
    }

    @RequestMapping("getComboCount")
    public AjaxResult getComboCount() {
        List retval = comboService.getComboCount();
        return AjaxResult.success(retval);
    }

    @RequestMapping("add")
    public AjaxResult add(Combo combo, String goodIds) {
        boolean idOk1 = comboService.save(combo);
        List<ComboGoods> tmpList = new ArrayList<>();
        for (String goodsId : goodIds.split(",")) {
            ComboGoods comboGoods = ComboGoods.builder().comboId(combo.getId()).goodsId(Long.parseLong(goodsId)).build();
            tmpList.add(comboGoods);
        }
        boolean idOk2 = comboGoodsService.saveBatch(tmpList);
        return AjaxResult.success(idOk1 && idOk2);
    }

    @RequestMapping("mod")
    public AjaxResult mod(Combo combo, String goodIds) {
        boolean idOk1 = comboService.updateById(combo);
        List<ComboGoods> tmpList = new ArrayList<>();
        for (String goodsId : goodIds.split(",")) {
            ComboGoods comboGoods = ComboGoods.builder().comboId(combo.getId()).goodsId(Long.parseLong(goodsId)).build();
            tmpList.add(comboGoods);
        }
        boolean isOk2 = comboGoodsService.remove(new QueryWrapper<ComboGoods>().eq("combo_id", combo.getId()));
        boolean idOk3 = comboGoodsService.saveBatch(tmpList);
        return AjaxResult.success(idOk1 && isOk2 && idOk3);
    }

    @RequestMapping("del")
    public AjaxResult del(Long comboId) {
        boolean isOk1 = comboService.removeById(comboId);
        boolean isOk2 = comboGoodsService.remove(new QueryWrapper<ComboGoods>().eq("combo_id", comboId));
        return AjaxResult.success(isOk1 && isOk2);
    }
}