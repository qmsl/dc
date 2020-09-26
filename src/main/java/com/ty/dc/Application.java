package com.ty.dc;

import com.ty.dc.weixin.WxCpConfiguration;
import me.chanjar.weixin.cp.api.WxCpService;
import org.springframework.boot.Banner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

/**
 * 启动程序
 *
 * @author ruoyi
 */
@EnableScheduling
@SpringBootApplication
public class Application {
    public static void main(String[] args) {

        SpringApplication application = new SpringApplication(Application.class);
        application.setBannerMode(Banner.Mode.OFF);
        application.run(args);

        //testOath2Url();


        System.out.println("(♥◠‿◠)ﾉﾞ  启动成功   ლ(´ڡ`ლ)ﾞ  \n");
    }

    private static void testOath2Url(){
        WxCpService wxCpService =  WxCpConfiguration.getCpService(1000033);
        String url = wxCpService.getOauth2Service().buildAuthorizationUrl("www.baidu.com/auth/wx","1000033");

        System.out.println(url);
    }
}