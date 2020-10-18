package com.ty.dc.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import com.ty.dc.base.BaseEntity;
import lombok.*;

import java.util.List;

/**
 * <p>
 * 套餐
 * </p>
 *
 * @author wen
 * @since 2020-09-24
 */
@Data
@Builder(toBuilder = true)
@EqualsAndHashCode(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
@TableName("dc_combo")
public class Combo extends BaseEntity {

    private static final long serialVersionUID = 1L;

    @TableField
    private String comboName;

    private String comboCode;

    private String comboDesc;

    private String comboImg;

    private String comboType;

    private String cookName;

    private String cookImg;
    /**
     * 状态；1，正常；2停用
     */
    private String status;

    @TableField(exist = false)
    private List<Goods> goods;

}
