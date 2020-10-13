import React, { Component } from 'react';
import ReactPhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
class NhapThongTinMuaVe extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            phone: ""
        }
    }
    handleOnChange = (value: any) => {
        console.log(value);
        this.setState({ phone: value }, () => {
            console.log(this.state.phone);
        });
    };
    render() {
        return (
            <div className="thongTinKhachHang">
                <div className="thongTin">
                    <div className="form-group">
                        <label className="form-control-label" htmlFor="exampleFormControlInput1">Họ tên*</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Huỳnh Văn A" />
                    </div>
                    <div className="form-group">
                        <label className="form-control-label" htmlFor="exampleFormControlInput1">Số điện thoại*</label>
                        <ReactPhoneInput
                            country={'vn'}
                            value={this.state.phone}
                            onChange={this.handleOnChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-control-label" htmlFor="exampleFormControlInput1">Email*</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="email@gmail.com" />
                    </div>
                    <div className="form-group">
                        <label className="form-control-label" htmlFor="exampleFormControlInput1">Ghi chú</label>
                        <textarea className="form-control" placeholder="Các yêu cầu đặc biệt không thể được đảm bảo - nhưng nhà xe sẽ cố gắng hết sức để đáp ứng nhu cầu của bạn." />
                    </div>
                    <div style={{ fontSize: 14 }} className="form-group">
                        <span>Bằng việc bấm nút Đặt chỗ, bạn đã đồng ý với </span>
                        <a href="#" target="_blank">Chính sách bảo mật thông tin </a>và
                    <a href="#" target="_blank"> Quy chế</a>
                        <span>  của NhaXe.Com</span>
                    </div>
                </div>
            </div>
        );
    }
}

type Props = {

}

type State = {
    phone: string
}

export default NhapThongTinMuaVe;