package com.knitting.user.mapper;

import com.knitting.user.domain.UserEntity;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface UserMapper {

    UserEntity findByLoginId(@Param("loginId") String loginId);

    List<String> findRolesByLoginId(@Param("loginId") String loginId);

    int insertUser(UserEntity user);

}
