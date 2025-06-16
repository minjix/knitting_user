package com.knitting.user.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
@Data
public class UserDto {

    /*유저ID*/
    private int userId;

    /*로그인ID*/
    private  String loginID;

    /*비밀번호*/
    private String password;

    /*생년월일*/
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date birthdate;

    /*권한 (예: ROLE_USER, ROLE_ADMIN)*/
    private  String role;

    /*잠금 여부 (TRUE일 경우 로그인 불가)*/
    private boolean isLocked;

    /*생성 시각*/
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date createdAt;

    /*수정 시각*/
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date updatedAt;

}
