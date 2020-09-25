package com.ty.dc.controller;

import com.ty.dc.utils.AjaxResult;
import java.util.List;
import com.ty.dc.service.IGoodsService;
import com.ty.dc.entity.Goods;
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
 * @since 2020-09-24
 */
@RestController
@RequestMapping("/dc/goods")
public class GoodsController extends BaseController {

    @Autowired
    private IGoodsService GoodsService;

    @RequestMapping("list")
    public AjaxResult list() {
        startPage();
        List<Goods> list = GoodsService.list();
        return AjaxResult.success(getDataTable(list));
    }
}
