package com.ty.dc.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.ty.dc.entity.User;
import com.ty.dc.mapper.UserMapper;
import com.ty.dc.service.IUserService;
import com.ty.dc.weixin.WxCpConfiguration;
import lombok.extern.java.Log;
import me.chanjar.weixin.common.error.WxErrorException;
import me.chanjar.weixin.cp.api.WxCpService;
import me.chanjar.weixin.cp.bean.WxCpUserDetail;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author wen
 * @since 2020-10-20
 */
@Service
@Log
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements IUserService {

    @Async
    @Override
    public void saveUserDetailInfo(String userTicket) {
        WxCpService wxCpService = WxCpConfiguration.getCpService(1000033);

        try {
            WxCpUserDetail wxCpUserDetail = wxCpService.getOauth2Service().getUserDetail(userTicket);
            if (null != wxCpUserDetail) {
                User user = baseMapper.selectOne(new QueryWrapper<User>().eq("uid", wxCpUserDetail.getUserId()));
                if (null != user) {
                    user.setName(wxCpUserDetail.getName());
                    user.setId(user.getId());
                    baseMapper.updateById(user);
                } else {
                    user = new User();
                    user.setName(wxCpUserDetail.getName());
                    user.setUid(wxCpUserDetail.getUserId());
                    user.setType("2");
                    user.setSpecial("2");
                    baseMapper.insert(user);
                }
            }
        } catch (WxErrorException e) {
            log.warning("存储用户信息失败" + e.getMessage());
        }
    }

}
