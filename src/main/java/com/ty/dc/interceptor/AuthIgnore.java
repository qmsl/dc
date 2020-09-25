package com.ty.dc.interceptor;

import java.lang.annotation.*;

/**
 * api接口，忽略Token验证
 *
 */
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface AuthIgnore {

}
