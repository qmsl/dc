package com.ty.dc.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.ty.dc.base.BaseController;
import com.ty.dc.entity.Goods;
import com.ty.dc.service.IGoodsService;
import com.ty.dc.utils.AjaxResult;
import com.ty.dc.utils.StringUtils;
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

    @RequestMapping("find")
    public AjaxResult findById(long id) {
        return AjaxResult.success(goodsService.getById(id));
    }

    @RequestMapping("findByComboId")
    public AjaxResult findByComboId(long comboId) {
        return AjaxResult.success(goodsService.getByComboId(comboId));
    }

    @RequestMapping("list")
    public AjaxResult list(String goodsName, String comboType, String goodsType) {
        startPage();
        List<Goods> list = goodsService.list(new QueryWrapper<Goods>()
                .like(StringUtils.isNotEmpty(goodsName), "goods_name", goodsName)
                .in(StringUtils.isNotEmpty(comboType) && comboType.equals("1"), "goods_type", "1", "2", "3", "4")//营养简餐
                .eq(StringUtils.isNotEmpty(comboType) && comboType.equals("2"), "goods_type", "5")//精美面食
                .in(StringUtils.isNotEmpty(comboType) && comboType.equals("3"), "goods_type", "6", "2", "3", "4")//特色美食
                .in(StringUtils.isNotEmpty(comboType) && comboType.equals("4"), "goods_type", "1", "2", "3", "4")//运动简餐
                .eq(StringUtils.isNotEmpty(goodsType), "goods_type", goodsType)
                .orderByAsc("goods_type")
        );
        return AjaxResult.success(getDataTable(list));
    }

    @RequestMapping("add")
    public AjaxResult add(Goods goods) {
        boolean isOk = goodsService.save(goods);
        return AjaxResult.status(isOk);
    }

    @RequestMapping("del")
    public AjaxResult del(long id) {
        boolean isOk = goodsService.removeById(id);
        return AjaxResult.status(isOk);
    }

    @RequestMapping("mod")
    public AjaxResult mod(Goods goods) {
        boolean isOk = goodsService.updateById(goods);
        return AjaxResult.status(isOk);
    }
}
