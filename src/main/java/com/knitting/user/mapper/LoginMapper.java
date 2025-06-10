package com.knitting.user.mapper;

import org.apache.ibatis.annotations.Mapper;
import com.knitting.user.dto.UserDto;

@Mapper
public interface LoginMapper {

    public void regUser(UserDto dto);
}
