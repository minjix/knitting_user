package com.knitting.user.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface UserRolesMapper {
    int insertUserRole(@Param("userId") int userId, @Param("roleId") Long roleId);
}
