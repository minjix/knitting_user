package com.knitting.user.mapper;

import org.apache.ibatis.annotations.Mapper;
import com.knitting.user.dto.UserDto;

import java.util.Map;

@Mapper
public interface LoginMapper {

    public void regUser(UserDto dto);

    public int chkDupId(String id);

    public String findLoginId(Map<String, Object> param);
}
