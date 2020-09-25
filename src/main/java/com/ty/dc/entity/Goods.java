package com.ty.dc.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import com.ty.dc.base.BaseEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * <p>
 * 商品
 * </p>
 *
 * @author wen
 * @since 2020-09-24
 */
@Data
@EqualsAndHashCode(callSuper = true)
@TableName("dc_goods")
public class Goods extends BaseEntity {

    private static final long serialVersionUID = 1L;

    /**
     * 商品名称
     */
    private String goodsName;

    /**
     * 商品类型
     */
    private String goodsType;

    /**
     * 商品描述
     */
    private String goodsDesc;

    /**
     * 商品图片
     */
    private String goodsImg;

    /**
     * 状态；1，正常；2停用
     */
    private String status;


}
