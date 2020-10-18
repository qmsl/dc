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
 * @since 2020-09-24
 */
@Data
@EqualsAndHashCode(callSuper = true)
@TableName("dc_order")
public class Order extends BaseEntity {

    private static final long serialVersionUID = 1L;

    /**
     * 订单号
     */
    private String orderNum;

    /**
     * 用户ID
     */
    private String userId;

    /**
     * 套餐ID
     */
    private Long comboId;

    /**
     * 套餐类型
     */
    private String comboType;

    /**
     * 套餐名称
     */
    private String comboName;

    /**
     * 套餐编码
     */
    private String comboCode;

    /**
     * 套餐图片
     */
    private String comboImg;

    /**
     * 数量
     */
    private Integer num;

    /**
     * 订单日期
     */
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate orderDate;

    /**
     * 状态；1，预约；2确定
     */
    private String status;

    /**
     * 评分
     */
    private Double eveScore;

    /**
     * 评价内容
     */
    private String eveDesc;

    private String cookName;

}
