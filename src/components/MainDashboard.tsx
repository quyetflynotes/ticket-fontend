import React, { Component, useEffect, useState } from 'react';
import { Bar } from "react-chartjs-2";
import { Statistical } from '../share/base-ticket/Statistical/Statistical';
import moment from "moment"

type Props = {
    statistic: Statistical;
    onTotalGet: (totalGet: number) => void;
}

export default function MainDashboard(props: Props) {

    const [dataTicket, setDataTicket] = useState<any>({
        labels: [1, 2, 3, 4, 4, 5, 6, 6, 7],
        datasets: [
            {
                type: "line",
                label: "",
                data: [1, 2, 3, 4, 4, 5, 6, 6, 7],
                fill: false,
                backgroundColor: "rgba(66, 135, 245,1)",
                borderColor: "rgba(66, 135, 245,1)"

            }
        ]
    });

    const [dataRevenue, setdataRevenue] = useState<any>({
        labels: [1, 2, 3, 4, 4, 5, 6, 6, 7],
        datasets: [
            {
                type: "line",
                label: "",
                data: [1, 2, 3, 4, 4, 5, 6, 6, 7],
                fill: false,
                backgroundColor: "rgba(66, 135, 245,1)",
                borderColor: "rgba(66, 135, 245,1)"

            }
        ]
    });


    useEffect(() => {
        console.log(props.statistic);
        let labels = props.statistic?.charRevenue?.map(item => {
            return moment(new Date(item.day || new Date)).format('MM/DD')

        }) || []

        setDataTicket({
            labels: labels,
            datasets: [
                {
                    type: "bar",
                    label: "Số vé bán ra",
                    data: props?.statistic?.charTicket?.map(item => {
                        return item.data
                    }),
                    fill: false,
                    backgroundColor: "rgba(232, 104, 100,1)",
                    borderColor: "rgba(232, 104, 100,1)"

                }
            ]
        })

        setdataRevenue({
            labels: labels,
            datasets: [
                {
                    type: "line",
                    label: "Doanh Thu Mang Về",
                    data: props?.statistic?.charRevenue?.map(item => {
                        return item.data
                    }),
                    fill: false,
                    backgroundColor: "rgba(66, 135, 245,1)",
                    borderColor: "rgba(66, 135, 245,1)"

                }
            ]
        })

    }, [props])


    return (
        <div className="row">


            <div className="col-xl-8">
                <div className="card bg-default">
                    <div className="card-header bg-transparent">
                        <div className="row align-items-center">
                            <div className="col">
                                <h6 className="text-light text-uppercase ls-1 mb-1">Tổng quát</h6>
                                <h5 className="h3 text-white mb-0">Doanh số</h5>
                            </div>
                            <div className="col">
                                <ul className="nav nav-pills justify-content-end">
                                    <li className="nav-item mr-2 mr-md-0" data-toggle="chart" data-target="#chart-sales-dark" data-update='{"data":{"datasets":[{"data":[0, 20, 10, 30, 15, 40, 20, 60, 60]}]}}' data-prefix="$" data-suffix="k">
                                        <div className="nav-link py-2 px-3 active"  onClick= {()=> props.onTotalGet(30)}>
                                            <span className="d-none d-md-block">Tháng</span>
                                            <span className="d-md-none" >M</span>
                                        </div>
                                    </li>
                                    <li className="nav-item" data-toggle="chart" data-target="#chart-sales-dark" data-update='{"data":{"datasets":[{"data":[0, 20, 5, 25, 10, 30, 15, 40, 40]}]}}' data-prefix="$" data-suffix="k">
                                        <div  className="nav-link py-2 px-3" onClick= {()=> props.onTotalGet(7)}>
                                            <span className="d-none d-md-block">Tuần</span>
                                            <span className="d-md-none">W</span>
                                        </div>
                                    </li>
                                </ul>
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">

                        <Bar
                            data={dataTicket}
                            options={
                                {
                                    title: {
                                        display: true,
                                        text: "Vé được bán trong tuần qua",
                                        color: "white"
                                    },
                                    animation: {
                                        duration: 3000
                                    },
                                    tooltips: {
                                        mode: 'index',
                                        axis: 'x'
                                    },
                                    responsive: true,
                                    maintainAspectRatio: true,

                                }
                            }
                        />
                    </div>
                </div>
            </div>
            <div className="col-xl-4">
                <div className="card">
                    <div className="card-header bg-transparent">
                        <div className="row align-items-center">
                            <div className="col">
                                <h6 className="text-uppercase text-muted ls-1 mb-1">Hiệu suất</h6>
                                <h5 className="h3 mb-0">Tổng số vé bán</h5>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <Bar
                            data={dataRevenue}
                            options={
                                {
                                    title: {
                                        display: true,
                                        text: "Doanh Thu ",
                                        color: "white"
                                    },
                                    animation: {
                                        duration: 3000
                                    },
                                    tooltips: {
                                        mode: 'index',
                                        axis: 'x'
                                    },
                                    responsive: true,
                                    maintainAspectRatio: true,

                                }
                            }
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}
