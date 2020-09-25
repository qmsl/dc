package com.ty.dc.interceptor;


import com.ty.dc.base.BaseException;

public class AccessDeniedException extends BaseException {

    public AccessDeniedException() {
        super("认证失败！");
    }
}
