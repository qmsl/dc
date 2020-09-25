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

    private static String redirectDomain;

    public static String getProfile() {
        return profile;
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

    public static String getRedirectDomain() {
        return redirectDomain;
    }

    public static void setRedirectDomain(String redirectDomain) {
        Global.redirectDomain = redirectDomain;
    }
}
