import React, { Component } from 'react';

class ErrorKhongGhe extends Component {
    render() {
        return (
            <div className="khungError">
                <div className="title text-center">
                    Vé xe từ Hà Nội đi Nha Trang
                </div>
                <img src="/images/khong-tim-thay-chuyen.png" alt="route-not-found" />
                <div className="contentError text-center">
                    Không tìm thấy chuyến
                </div>
                <div className="contentThongTin text-center">
                Hiện tại NhaXe.Com chưa có thông tin nhà xe đi từ Hà Nội đến Nha Trang vào ngày 18/10/2020.
                Xin quý khách vui lòng chọn ngày đi khác hoặc tuyến đường khác.
                </div>
            </div>
        );
    }
}

export default ErrorKhongGhe;