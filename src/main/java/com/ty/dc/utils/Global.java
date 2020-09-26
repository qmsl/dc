package com.ty.dc.utils;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * 全局配置类
 *
 */
@Component
@ConfigurationProperties(prefix = "dc")
public class Global {

    /**
     * 上传路径
     */
    private static String profile;

    private static String redirecturl;

    public static String getProfile() {
        return profile;
    }

    public static String getRedirecturl() {
        return redirecturl;
    }

    public void setRedirecturl(String redirecturl) {
        Global.redirecturl = redirecturl;
    }

    public void setProfile(String profile) {
        Global.profile = profile;
    }


    /**
     * 获取下载路径
     */
    public static String getDownloadPath() {
        return getProfile() + "/download/";
    }

    /**
     * 获取上传路径
     */
    public static String getUploadPath() {
        return getProfile() + "/upload";
    }
}

