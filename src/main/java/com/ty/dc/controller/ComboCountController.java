package com.ty.dc.controller;

import com.ty.dc.base.BaseController;
import com.ty.dc.entity.GoodsCount;
import com.ty.dc.service.IComboCountService;
import com.ty.dc.service.IComboService;
import com.ty.dc.utils.AjaxResult;
import com.ty.dc.utils.ExcelUtil;
import com.ty.dc.utils.Global;
import com.ty.dc.utils.file.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.Date;
import java.util.List;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author wen
 * @since 2020-10-11
 */
@Controller
@RequestMapping("/dc/comboCount")
public class ComboCountController extends BaseController {

    @Autowired
    private IComboService comboService;

    @Autowired
    private IComboCountService comboCountService;

    //获取历史订单统计数据，前端传入时间段进行查询，查询当天的传当天的日期给startDate
    @RequestMapping("list")
    @ResponseBody
    public AjaxResult list(Date startDate, Date endDate) {
        List<GoodsCount> list = comboCountService.getOrderCnt(startDate, endDate);
        return AjaxResult.success(list);
        /*
        startPage();
        List<ComboCount> list = comboCountService.listComboCount(startDate, endDate);
        return AjaxResult.success(getDataTable(list));*/
    }

    //获取历史订单统计数据，前端传入时间段进行查询，查询当天的传当天的日期给startDate
    @RequestMapping("export")
    public void export(Date startDate, Date endDate, HttpServletResponse response) throws IOException {
        List<GoodsCount> list = comboCountService.getOrderCnt(startDate, endDate);

        ExcelUtil<GoodsCount> util = new ExcelUtil<>(GoodsCount.class);

        AjaxResult ajaxResult = util.exportExcel(list, "订单统计");

        String downloadPath = Global.getDownloadPath() + ajaxResult.get("msg").toString();
        response.setContentType(MediaType.APPLICATION_OCTET_STREAM_VALUE);
        FileUtils.setAttachmentResponseHeader(response, ajaxResult.get("msg").toString());

        FileUtils.writeBytes(downloadPath, response.getOutputStream());

        FileUtils.deleteFile(downloadPath);
    }

}
