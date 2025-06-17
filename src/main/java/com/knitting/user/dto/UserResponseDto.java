package com.knitting.user.dto;

import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class UserResponseDto {
    //클라이언트에 반환할 때 민감정보(password) 제외
    private int userId;
    private String loginId;
    private String username;
    private Date birthday;
    private Date insDt;
    private Date updDt;
    private List<String> roles;
}
