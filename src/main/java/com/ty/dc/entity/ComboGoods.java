package com.ty.dc.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import com.ty.dc.base.BaseEntity;
import lombok.*;

/**
 * <p>
 *
 * </p>
 *
 * @author wen
 * @since 2020-09-24
 */
@Data
@EqualsAndHashCode(callSuper = true)
@TableName("dc_combo_goods")
@Builder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
public class ComboGoods extends BaseEntity {

    private static final long serialVersionUID = 1L;

    private Long comboId;

    private Long goodsId;

    /**
     * 状态；1，正常；2停用
     */
    private String status;


}
