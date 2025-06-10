package com.knitting.user.controller;

import com.knitting.user.service.LoginService;
import com.knitting.user.dto.UserDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class LoginController {

    private final Logger log = LoggerFactory.getLogger(getClass());

    @Autowired
    private LoginService loginService;

    @PostMapping("/regUser")
    public void regUser(@RequestBody UserDto dto) throws Exception {
        loginService.regUser(dto);
    }

}
