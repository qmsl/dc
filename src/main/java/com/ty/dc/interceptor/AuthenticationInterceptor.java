package com.ty.dc.interceptor;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 权限(Token)验证
 */
@Component
@Slf4j
public class AuthenticationInterceptor extends HandlerInterceptorAdapter {


    public static final String USER_KEY = "uid";

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        AuthIgnore annotation;
        if (handler instanceof HandlerMethod) {
            annotation = ((HandlerMethod) handler).getMethodAnnotation(AuthIgnore.class);
        } else {
            return true;
        }

        //如果有@IgnoreAuth注解，则不验证token
        if (annotation != null) {
            return true;
        }

        //从header中获取token
        String token = request.getHeader("uid");
        //如果header中不存在token，则从参数中获取token
        if (StringUtils.isBlank(token)) {
            token = request.getParameter("uid");
        }

        //如果上面都不存在，就从cookie里面取
        Cookie[] cookies = request.getCookies();
        if (StringUtils.isBlank(token) && null != cookies) {
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals("uid")) {
                    token = cookie.getValue();
                }
            }
        }

        //token为空
        if (StringUtils.isBlank(token)) {
            throw new AccessDeniedException();
        }

        //设置userId到request里，后续根据userId，获取用户信息
        request.setAttribute(USER_KEY, token);

        return true;
    }
}
