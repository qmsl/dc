package com.ty.dc.service;

import com.ty.dc.entity.User;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author wen
 * @since 2020-10-20
 */
public interface IUserService extends IService<User> {

    void saveUserDetailInfo(String userTicket);

}
