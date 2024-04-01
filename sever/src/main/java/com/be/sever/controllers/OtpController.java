package com.be.sever.controllers;

import com.be.sever.dtos.request.OtpRequest;
import com.be.sever.services.OtpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/otps")
@CrossOrigin("*")
public class OtpController {
    @Autowired
    private OtpService otpService;

    @PostMapping("")
    public ResponseEntity<?> createNewOTP(@RequestParam("otp") String otp) throws Exception {
        OtpRequest request = new OtpRequest();
        request.setOtp(otp);

        return new ResponseEntity<>(otpService.createNewRecord(request), HttpStatus.OK);
    }
}
