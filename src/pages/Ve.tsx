import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import FooterDashboard from '../components/FooterDashboard';
import HeaderDashboard from '../components/HeaderDashboard';
import NavbarDashboard from '../components/NavbarDashboard';
import InputTimVe from '../components/InputTimVe';
import ErrorKhongGhe from '../components/ErrorKhongGhe';
import FillterVe from '../components/FillterVe';
import DanhSachVe from '../components/DanhSachVe';
class Ve extends Component {
    render() {
        return (
            <div>
                <Sidebar></Sidebar>
                <div className="main-content" id="panel">
                    <NavbarDashboard></NavbarDashboard >
                    <div className="header bg-primary pb-6">
                        <div className="container-fluid">
                            <HeaderDashboard></HeaderDashboard>
                        </div>
                    </div>
                    <div className="container-fluid mt--6">
                        <InputTimVe></InputTimVe>
                        <div className="rowVe">
                            <FillterVe></FillterVe>
                            <div className="columnVe mt-4">
                                <div>
                                    <h3>Vé xe từ Hà Nội đi Quảng Ninh: 1976 chuyến</h3>
                                </div>
                                <div className="sortVe">
                                    <span style={{fontSize: "14px"}} className="font-weight-500">Sắp xếp theo:</span>
                                    <div className="groupButton">
                                        <button type="button" className="btn btn-sm btn-outline-primary">
                                            <span>Giờ sớm nhất</span>
                                        </button>
                                        <button type="button" className="btn btn-sm btn-outline-primary">
                                            <span>Muộn nhất</span>
                                        </button>
                                        <button type="button" className="btn btn-sm btn-outline-primary">
                                            <span>Giá thấp nhất</span>
                                        </button>
                                        <button type="button" className="btn btn-sm btn-outline-primary">
                                            <span>Giá cao nhất</span>
                                        </button>
                                    </div>
                                </div>
                                <DanhSachVe></DanhSachVe>
                            </div>
                        </div>
                        <FooterDashboard></FooterDashboard>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ve;