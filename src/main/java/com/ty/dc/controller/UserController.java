package com.ty.dc.controller;

import com.ty.dc.utils.AjaxResult;
import java.util.List;
import com.ty.dc.service.IUserService;
import com.ty.dc.entity.User;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import com.ty.dc.base.BaseController;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author wen
 * @since 2020-10-20
 */
@RestController
@RequestMapping("/dc/user")
public class UserController extends BaseController {

    @Autowired
    private IUserService UserService;

    @RequestMapping("list")
    public AjaxResult list() {
        startPage();
        List<User> list = UserService.list();
        return AjaxResult.success(getDataTable(list));
    }
}
