package com.knitting.user.service;

import com.knitting.user.domain.UserEntity;
import com.knitting.user.dto.JoinDto;
import com.knitting.user.dto.LoginDto;
import com.knitting.user.dto.UserResponseDto;
import com.knitting.user.mapper.RoleMapper;
import com.knitting.user.mapper.UserMapper;
import com.knitting.user.mapper.UserRolesMapper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class AuthService {

    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;
    private final RoleMapper roleMapper;
    private final UserRolesMapper userRolesMapper;

    public AuthService(UserMapper userMapper, PasswordEncoder passwordEncoder, RoleMapper roleMapper, UserRolesMapper userRolesMapper){
        this.userMapper = userMapper;
        this.passwordEncoder = passwordEncoder;
        this.roleMapper = roleMapper;
        this.userRolesMapper = userRolesMapper;
    }

    @Transactional
    public UserResponseDto insertUser(JoinDto dto){
        if(userMapper.findByLoginId(dto.getLoginId()) != null) {
            throw new IllegalArgumentException("이미 존재하는 로그인ID 입니다.");
        }

        UserEntity user = new UserEntity();
        user.setLoginId(dto.getLoginId());
        user.setPassword(passwordEncoder.encode(dto.getPassword()));
        user.setUsername(dto.getUsername());
        user.setBirthday(dto.getBirthday());

        userMapper.insertUser(user);
        int newUserId = user.getUserId();

        Long roleUserId = roleMapper.findRoleIdByNLame("ROLE_USER");
        userRolesMapper.insertUserRole(newUserId, roleUserId);

        List<String> roles = new ArrayList<>(Arrays.asList("ROLE_USER"));
        user.setRoles(roles);

        UserResponseDto resp = new UserResponseDto();
        resp.setUserId(user.getUserId());
        resp.setLoginId(user.getLoginId());
        resp.setUsername(user.getUsername());
        resp.setBirthday(user.getBirthday());
        resp.setInsDt(user.getInsDt());
        resp.setUpdDt(user.getUpdDt());
        resp.setRoles(roles);
        return resp;

    }
}
