package com.knitting.user.security;

import com.knitting.user.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import com.knitting.user.domain.UserEntity;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MyBatisUserDetailsService implements UserDetailsService {

    private final UserMapper userMapper;

    @Autowired
    public MyBatisUserDetailsService(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    @Override
    public UserDetails loadUserByUsername(String loginId) throws UsernameNotFoundException{

        UserEntity dbUser = userMapper.findByLoginId((loginId));

        if(dbUser == null) {
            throw new UsernameNotFoundException("사용자를 찾을 수 없습니다 : " + loginId);
        }

        boolean enabled = true;

        List<String> roles = userMapper.findRolesByLoginId(loginId);

        List<SimpleGrantedAuthority> authorities = roles.stream().map(roleName -> {
            if(roleName.startsWith("ROLE_")){
                return new SimpleGrantedAuthority(roleName);
            } else {
                return new SimpleGrantedAuthority("ROLE_" + roleName);
            }
        }).collect(Collectors.toList());

        return User.builder()
                .username(dbUser.getLoginId())
                .password(dbUser.getPassword())
                .authorities(authorities)
                .accountExpired(false)
                .accountLocked(false)
                .credentialsExpired(false)
                .disabled(!enabled)
                .build();

    }

}
