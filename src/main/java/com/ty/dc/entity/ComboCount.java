package com.ty.dc.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import com.ty.dc.base.BaseEntity;
import java.time.LocalDate;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.format.annotation.DateTimeFormat;

/**
 * <p>
 * 
 * </p>
 *
 * @author wen
 * @since 2020-10-11
 */
@Data
@EqualsAndHashCode(callSuper = true)
@TableName("dc_combo_count")
public class ComboCount extends Combo {

    private static final long serialVersionUID = 1L;

    /**
     * 订餐数量
     */
    private Integer count;

    /**
     * 订单日期
     */
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate orderDate;

}
