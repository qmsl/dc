package com.ty.dc.controller;

import com.ty.dc.base.BaseController;
import com.ty.dc.interceptor.AuthIgnore;
import com.ty.dc.service.IUserService;
import com.ty.dc.utils.Global;
import com.ty.dc.weixin.WxCpConfiguration;
import me.chanjar.weixin.common.api.WxConsts;
import me.chanjar.weixin.common.error.WxErrorException;
import me.chanjar.weixin.cp.api.WxCpService;
import me.chanjar.weixin.cp.bean.WxCpOauth2UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.Cookie;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author wen
 * @since 2020-09-21
 */
@Controller
@RequestMapping("/auth/wx")
public class AuthController extends BaseController {

    private static final String redirect_url = "/order/auth/wx/post";

    @Autowired
    private IUserService userService;


    @RequestMapping("index")
    @AuthIgnore
    public String pre(final String state) {

        Cookie cookie1 = new Cookie("uid", "1");
        cookie1.setPath("/");
        cookie1.setMaxAge(10);
        getResponse().addCookie(cookie1);

        Cookie cookie = new Cookie("state", state);
        cookie.setPath("/");
        cookie.setMaxAge(10);
        getResponse().addCookie(cookie);
        return "auth";

        //return "auth?uid=111&state="+state+"&_t="+System.currentTimeMillis();

        /*switch (state) {
            case "1":
                return "/#/auth?sid=111&action=list";
            case "2":
                return "/#/auth?sid=111&action=scan";
            case "3":
                Cookie uid = new Cookie("uid", "111");
                uid.setPath("/");
                uid.setMaxAge(-1);
                getResponse().addCookie(uid);
                return "/order/admin/index.html";
            default:
                return "/404.html";
        }*/
    }


    @RequestMapping("auth")
    @AuthIgnore
    public String auth(String state) {
        WxCpService wxCpService = WxCpConfiguration.getCpService(1000033);
        String url = wxCpService.getOauth2Service().buildAuthorizationUrl(Global.getRedirecturl() + redirect_url, state, WxConsts.OAuth2Scope.SNSAPI_USERINFO);
        return "redirect:" + url;
    }

    @RequestMapping("post")
    @AuthIgnore
    public String post(final String code, final String state) throws WxErrorException {
        WxCpService wxCpService = WxCpConfiguration.getCpService(1000033);
        WxCpOauth2UserInfo userInfo = wxCpService.getOauth2Service().getUserInfo(code);

        Cookie cookieUid = new Cookie("uid", userInfo.getUserId());
        cookieUid.setPath("/");
        cookieUid.setMaxAge(-1);
        getResponse().addCookie(cookieUid);

        Cookie cookieState = new Cookie("state", state);
        cookieState.setPath("/");
        cookieState.setMaxAge(-1);
        getResponse().addCookie(cookieState);

        userService.saveUserDetailInfo(userInfo.getUserTicket());//把登陆过的用户信息保存起来

        return "auth";
    }

}
