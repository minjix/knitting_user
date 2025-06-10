package com.knitting.user.service.impl;

import com.knitting.user.mapper.LoginMapper;
import com.knitting.user.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    private LoginMapper loginMapper;
}
