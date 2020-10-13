import React, { Component } from 'react';
import FooterDashboard from '../components/FooterDashboard';
import HeaderDashboard from '../components/HeaderDashboard';
import MainDashboard from '../components/MainDashboard';
import NavbarDashboard from '../components/NavbarDashboard';
import Sidebar from '../components/Sidebar';
import Thongke from '../components/Thongke';

class Dashboard extends Component{

    render() {
        return (
            <div>
                <Sidebar></Sidebar>
                <div className="main-content" id="panel">
                    <NavbarDashboard></NavbarDashboard >
                    <div className="header bg-primary pb-6">
                        <div className="container-fluid">
                            <div className="header-body">
                                <HeaderDashboard></HeaderDashboard>
                                <Thongke></Thongke>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid mt--6">
                        <MainDashboard></MainDashboard>
                        <FooterDashboard></FooterDashboard>
                    </div>
                </div>
            </div>
        );
    }
}


export default Dashboard;