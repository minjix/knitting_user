package com.knitting.user.service.impl;

import com.knitting.user.mapper.LoginMapper;
import com.knitting.user.service.LoginService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.knitting.user.dto.UserDto;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.Map;

@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    private LoginMapper loginMapper;

    private final Logger log = LoggerFactory.getLogger(getClass());

    public void regUser(UserDto dto){
        log.debug("입력 파라미터 ====== {}", dto);
        loginMapper.regUser(dto);
    }

    public int chkDupId(String id){
        return loginMapper.chkDupId(id);
    }

    public String findLoginId(Map<String, Object> param){

        String birthdate = (String) param.get("birthdate");

        LocalDate localDate = LocalDate.parse(birthdate, DateTimeFormatter.ISO_DATE);
        log.info("localDate ======" + localDate);

        param.put("birthdate", localDate);

        return loginMapper.findLoginId(param);
    };
}
