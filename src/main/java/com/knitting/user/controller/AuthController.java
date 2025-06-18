package com.knitting.user.controller;

import com.knitting.user.dto.JoinDto;
import com.knitting.user.dto.LoginDto;
import com.knitting.user.dto.UserResponseDto;
import com.knitting.user.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/auth")
public class AuthController {
    private final AuthenticationManager authenticationManager;
    private final AuthService authService;

    public AuthController(AuthenticationManager authenticationManager, AuthService authService){
        this.authenticationManager = authenticationManager;
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginDto dto){
        try{
            Authentication auth = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(dto.getLoginId(), dto.getPassword())
            );

            return ResponseEntity.ok("로그인 성공");
        } catch (AuthenticationException e){
            return ResponseEntity.status(401).body("인증 실패: 로그인 ID 또는 비밀번호가 올바르지 않습니다.");
        }
    }

    @PostMapping("/insertUser")
    public ResponseEntity<?> insertUser(@Valid @RequestBody JoinDto dto){
        try{
            UserResponseDto created = authService.insertUser(dto);
            return  ResponseEntity.ok(created);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }


}
