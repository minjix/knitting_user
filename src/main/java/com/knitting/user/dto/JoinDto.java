package com.knitting.user.dto;

import lombok.Data;

import java.util.Date;

@Data
public class JoinDto {

//    @NotBlank(message = "아이디(username)는 필수입니다.")
//    @Size(min = 4, max = 50, message = "아이디는 4자 이상 50자 이하로 입력하세요.")
    private String loginId;

//    @NotBlank(message = "비밀번호(password)는 필수입니다.")
//    @Size(min = 8, max = 100, message = "비밀번호는 8자 이상이어야 합니다.")
    private String password;

//    @NotBlank(message = "이름(name)은 필수입니다.")
//    @Size(max = 100, message = "이름은 100자 이하로 입력하세요.")
    private String username;

//    @Past(message = "생년월일은 과거 날짜여야 합니다.")
    private Date birthday;  // 옵션 필드: null 허용. 값이 있으면 과거여야 함.
}
