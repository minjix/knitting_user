package com.knitting.user.domain;

import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Data
public class UserEntity {
    private int userId;          // user_id
    private String username;      // username
    private String loginId;      // login_id
    private String password;      // password (암호화된)
    private Date birthday;   // birthday
    private Date insDt;  // ins_dt
    private Date updDt;  // upd_dt
    private List<String> roles;
}
