package com.ty.dc.entity;

import com.ty.dc.utils.annotation.Excel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Created by wen on 2020-10-18.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class GoodsCount {

    private String id;

    @Excel(name = "菜品名称")
    private String goodsName;

    @Excel(name = "菜品数量", cellType = Excel.ColumnType.NUMERIC)
    private String cnt;

    @Excel(name = "厨师名称")
    private String cookName;
}
