package com.knitting.user.service;

import com.knitting.user.dto.UserDto;

import java.util.Map;

public interface LoginService {

    public void regUser(UserDto dto) throws  Exception;

    public int chkDupId(String id) throws  Exception;

    public String findLoginId(Map<String, Object> param);
}
