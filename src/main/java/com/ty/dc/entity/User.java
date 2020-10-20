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
 * @since 2020-10-20
 */
@Data
@EqualsAndHashCode(callSuper = true)
@TableName("dc_user")
@Builder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
public class User extends BaseEntity {

    private static final long serialVersionUID = 1L;

    /**
     * 用户ID
     */
    private String uid;

    /**
     * 用户名
     */
    private String name;

    /**
     * 1,管理员；2，普通用户，3，厨师
     */
    private String type;

    /**
     * 特殊用户，1领导，2普通
     */
    private String special;

    /**
     * 通知用户
     */
    private String touser;


}
