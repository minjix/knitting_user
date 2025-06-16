package com.knitting.user.controller;

import com.knitting.user.service.LoginService;
import com.knitting.user.dto.UserDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Controller
public class LoginController {

    private final Logger log = LoggerFactory.getLogger(getClass());

    @Autowired
    private LoginService loginService;

    @PostMapping("/regUser")
    public Map<String, Object> regUser(@RequestBody UserDto dto){

        Map<String, Object> response = new HashMap<>();

        log.debug("요청 파라미터: {}", dto);

        try{
            loginService.regUser(dto);
            response.put("success", true);
        } catch (Exception e){
            log.error("회원가입 중 예외 발생", e);
            response.put("success", false);
            response.put("message", "회원가입 중 문제가 발생했습니다. 다시 시도해주세요.");
        }

        return response;
    }

    @ResponseBody
    @PostMapping("/join/chkDupId")
    public Map<String, Object> chkDupId(@RequestBody Map<String, String> param) throws Exception {

        Map<String, Object> response = new HashMap<>();

        String id = param.get("id");
        //boolean exists = userService.isUserIdExists(id);

        log.debug("요청 파라미터: {}", id);

        int result = loginService.chkDupId(id);
        log.debug("중복 확인 결과: {}", result);

        response.put("duplicate", result);
        response.put("result", result >= 1 ? "duplicate" : "available");
        response.put("timestamp", System.currentTimeMillis());

        return response;
    }

    @PostMapping("/findLoginId")
    public Map<String, Object> findLoginId(@RequestBody Map<String, Object> param) {

        Map<String, Object> response = new HashMap<>();

        log.debug("요청 파라미터: {}", param);

        String findId = loginService.findLoginId(param);

        response.put("findId", findId);
        return response;
    }


}
