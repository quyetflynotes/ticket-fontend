import { set } from 'date-fns/esm';
import React, { Component, useEffect, useState } from 'react';
import FooterDashboard from '../components/FooterDashboard';
import HeaderDashboard from '../components/HeaderDashboard';
import MainDashboard from '../components/MainDashboard';
import NavbarDashboard from '../components/NavbarDashboard';
import Sidebar from '../components/Sidebar';
import Thongke from '../components/Thongke';
import { StaffService } from '../Services/StaffService';
import { StatisticService } from '../Services/StatisticService';
import {Statistical } from "../share/base-ticket/Statistical/Statistical"
export default function Dashboard() {
    const [statistic, setstatistic] = useState<Statistical>({totalCustomer : 0, charRevenue: [],charTicket : [],totalRevenue : 0,totalTicket : 0  });
    useEffect(() => {
        StatisticService.get().then(res => {
            setstatistic(res);
        })
    }, [])
    return (
        <div>
            <Sidebar></Sidebar>
            <div className="main-content" id="panel">
                <NavbarDashboard
                    search={() => { }}
                ></NavbarDashboard >
                <div className="header bg-primary pb-6">
                    <div className="container-fluid">
                        <div className="header-body">
                            <HeaderDashboard></HeaderDashboard>
                            <Thongke
                                 statistic = {statistic}
                            ></Thongke>
                        </div>
                    </div>
                </div>
                <div className="container-fluid mt--6">
                    <MainDashboard></MainDashboard>
                    <FooterDashboard></FooterDashboard>
                </div>
            </div>
        </div>
    )
}
