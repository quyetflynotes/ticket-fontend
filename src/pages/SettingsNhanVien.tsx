import { url } from 'inspector';
import React, { Component } from 'react';
import FooterDashboard from '../components/FooterDashboard';
import HeaderDashboard from '../components/HeaderDashboard';
import MainProfile from '../components/MainProfile';
import NavbarDashboard from '../components/NavbarDashboard';
import Sidebar from '../components/Sidebar';

class SettingsNhanVien extends Component {
    render() {
        return (
            <div>
                <Sidebar></Sidebar>
                <div className="main-content" id="panel">
                    <NavbarDashboard></NavbarDashboard >
                    <div className="header bg-primary pb-6 d-flex align-items-center" style={{ minHeight: "500px", backgroundImage: "url(/images/profile-cover.jpg)", backgroundSize: "cover", backgroundPosition: "center top" }}>
                        {/* Mask */}
                        <span className="mask bg-gradient-default opacity-8"></span>
                        {/* Header container */}
                        <div className="container-fluid d-flex align-items-center">
                            <div className="row">
                                <div className="col-lg-7 col-md-10">
                                    <h1 className="display-2 text-white">Xin chào Huỳnh Văn Nam</h1>
                                    <p className="text-white mt-0 mb-5">Đây là trang hồ sơ của bạn. Bạn có thể xem tiến độ bạn đã đạt được với công việc của mình và quản lý các dự án hoặc nhiệm vụ được giao</p>
                                    <a href="#!" className="btn btn-neutral">Chỉnh sửa hồ sơ</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid mt--6">
                        <MainProfile></MainProfile>
                        <FooterDashboard></FooterDashboard>
                    </div>
                </div>
            </div>
        );
    }
}

export default SettingsNhanVien;