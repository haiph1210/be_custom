package com.be.sever.services;

import com.be.sever.dtos.request.OtpRequest;
import com.be.sever.entites.Otp;
import com.be.sever.repositories.OtpRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
@Log4j2
public class OtpService {
    @Autowired
    private OtpRepository otpRepository;

    public Otp createNewRecord(OtpRequest request) throws Exception {
        handleValidateRequest(request);
        Otp newOtp = Otp
                .builder()
                .otp(request.getOtp())
                .build();
        return otpRepository.save(newOtp);
    }

    private void handleValidateRequest(OtpRequest request) throws Exception {
        if (Objects.isNull(request) || request.getOtp().length() != 4) {
            throw new Exception("Vui lòng nhập đúng 4 ký tự số ở tin nhắn điện thoại.");
        }
    }

}
