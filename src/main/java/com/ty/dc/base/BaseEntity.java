package com.ty.dc.base;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableLogic;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * Created by wen on 2020-9-18.
 */
public class BaseEntity implements Serializable {

    @TableId
    private Long id;

    /**
     * 删除标识
     */
    @TableLogic
    @JsonIgnore
    private String delFlag;

    /**
     * 创建时间
     */
    @JsonIgnore
    private LocalDateTime crtTime;

    /**
     * 更新时间
     */
    @JsonIgnore
    private LocalDateTime upTime;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDelFlag() {
        return delFlag;
    }

    public void setDelFlag(String delFlag) {
        this.delFlag = delFlag;
    }

    public LocalDateTime getCrtTime() {
        return crtTime;
    }

    public void setCrtTime(LocalDateTime crtTime) {
        this.crtTime = crtTime;
    }

    public LocalDateTime getUpTime() {
        return upTime;
    }

    public void setUpTime(LocalDateTime upTime) {
        this.upTime = upTime;
    }
}
