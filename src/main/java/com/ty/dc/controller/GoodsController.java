package com.ty.dc.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.ty.dc.base.BaseController;
import com.ty.dc.entity.Goods;
import com.ty.dc.service.IGoodsService;
import com.ty.dc.utils.AjaxResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author wen
 * @since 2020-09-24
 */
@RestController
@RequestMapping("/dc/goods")
public class GoodsController extends BaseController {

    @Autowired
    private IGoodsService goodsService;

    @RequestMapping("list")
    public AjaxResult list(Goods goods) {
        startPage();
        List<Goods> list = goodsService.list(new QueryWrapper<>(goods));
        return AjaxResult.success(getDataTable(list));
    }

    @RequestMapping("add")
    public AjaxResult add(Goods goods) {
        boolean isOk = goodsService.save(goods);
        return AjaxResult.success(isOk);
    }

    @RequestMapping("del")
    public AjaxResult del(long id) {
        boolean isOk = goodsService.removeById(id);
        return AjaxResult.success(isOk);
    }

    @RequestMapping("mod")
    public AjaxResult mod(Goods goods) {
        boolean isOk = goodsService.updateById(goods);
        return AjaxResult.success(isOk);
    }
}
