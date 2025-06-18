package com.knitting.user.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class LoginDto {

    @NotBlank(message = "아이디(loginId) 는 필수입니다.")
    private String loginId;

    @NotBlank(message = "비밀번호(password) 는 필수입니다.")
    private String password;
}
