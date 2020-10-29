import React, { Component } from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import PieChartIcon from '@material-ui/icons/PieChart';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import { Statistical } from '../share/base-ticket/Statistical/Statistical';


type Props = {
    statistic: Statistical;
}
export default function Thongke(props : Props) {
    return (
        <div className="row">
            <div className="col-xl-3 col-md-6">
                <div className="card card-stats">
                    {/* Card body */}
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <h5 className="card-title text-uppercase text-muted mb-0">Tổng số lượng khách hàng</h5>
                                <span className="h2 font-weight-bold mb-0">{props.statistic.totalCustomer}</span>
                            </div>
                            <div className="col-auto">
                                <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                                    {<ThumbUpIcon />}
                                </div>
                            </div>
                        </div>
                        <p className="mt-3 mb-0 text-sm">
                            {/* <span className="text-success mr-2"><i className="fa fa-arrow-up"></i> 3.48%</span>
                            <span className="text-nowrap">Kể từ tháng trước</span> */}
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-md-6">
                <div className="card card-stats">
                    {/* Card body */}
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <h5 className="card-title text-uppercase text-muted mb-0">Tổng số vé được bán</h5>
                                <span className="h2 font-weight-bold mb-0">{props.statistic.totalTicket}</span>
                            </div>
                            <div className="col-auto">
                                <div className="icon icon-shape bg-gradient-orange text-white rounded-circle shadow">
                                    <PieChartIcon />
                                </div>
                            </div>
                        </div>
                        <p className="mt-3 mb-0 text-sm">
                            {/* <span className="text-success mr-2"><i className="fa fa-arrow-up"></i> 3.48%</span>
                            <span className="text-nowrap">Kể từ tháng trước</span> */}
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-md-6">
                <div className="card card-stats">
                    {/* Card body */}
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <h5 className="card-title text-uppercase text-muted mb-0">Tổng số chuyến đi đã khởi hành</h5>
                                <span className="h2 font-weight-bold mb-0">{props.statistic.totalTrip}</span>
                            </div>
                            <div className="col-auto">
                                <div className="icon icon-shape bg-gradient-green text-white rounded-circle shadow">
                                    <ChildFriendlyIcon />
                                </div>
                            </div>
                        </div>
                        <p className="mt-3 mb-0 text-sm">
                            {/* <span className="text-success mr-2"><i className="fa fa-arrow-up"></i> 3.48%</span>
                            <span className="text-nowrap">Kể từ tháng trước</span> */}
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-md-6">
                <div className="card card-stats">
                    {/* Card body */}
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <h5 className="card-title text-uppercase text-muted mb-0">Tổng doanh thu</h5>
                                <span className="h2 font-weight-bold mb-0">{props.statistic.totalRevenue}</span>
                            </div>
                            <div className="col-auto">
                                <div className="icon icon-shape bg-gradient-info text-white rounded-circle shadow">
                                    <EqualizerIcon />
                                </div>
                            </div>
                        </div>
                        <p className="mt-3 mb-0 text-sm">
                            {/* <span className="text-success mr-2"><i className="fa fa-arrow-up"></i> 3.48%</span>
                            <span className="text-nowrap">Kể từ tháng trước</span> */}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
