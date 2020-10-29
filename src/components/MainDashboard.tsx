import React, { Component, useEffect, useState } from 'react';
import { Bar } from '@reactchartjs/react-chart.js'
import { setDate } from 'date-fns/esm';

const rand = () => Math.floor(Math.random() * 255)

const genData = () => ({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            type: 'line',
            label: 'Dataset 1',
            borderColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
            borderWidth: 2,
            fill: false,
            data: [rand(), rand(), rand(), rand(), rand(), rand()],
        },
        {
            type: 'bar',
            label: 'Dataset 2',
            backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
            data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
            borderColor: 'white',
            borderWidth: 2,
        },
        {
            type: 'bar',
            label: 'Dataset 3',
            backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
            data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
        },
    ],
})

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
}


export default function MainDashboard() {

    const [data, setData] = useState(genData())

    useEffect(() => {
        const interval = setInterval(() => setData(genData()), 5000)

        return () => clearInterval(interval)
    }, [])

    // useEffect(() => {
    //     setData({
    //         ...data,
    //         labels: [1, 2, 3, 4, 5, 6, 7],

    //     })
    // }, [props])
// 
    return (
        <div className="row">
                                                {/* <Bar data={data} /> */}

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
                                        <a href="#" className="nav-link py-2 px-3 active" data-toggle="tab">
                                            <span className="d-none d-md-block">Tháng</span>
                                            <span className="d-md-none">M</span>
                                        </a>
                                    </li>
                                    <li className="nav-item" data-toggle="chart" data-target="#chart-sales-dark" data-update='{"data":{"datasets":[{"data":[0, 20, 5, 25, 10, 30, 15, 40, 40]}]}}' data-prefix="$" data-suffix="k">
                                        <a href="#" className="nav-link py-2 px-3" data-toggle="tab">
                                            <span className="d-none d-md-block">Tuần</span>
                                            <span className="d-md-none">W</span>
                                        </a>
                                    </li>
                                </ul>
                                <div>
                                    {/* <Bar data={data} /> */}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        {/* Chart */}
                        <div className="chart">
                            {/* Chart wrapper */}
                            <canvas id="chart-sales-dark" className="chart-canvas"></canvas>
                        </div>
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
                        Chart
                    <div className="chart">
                            <canvas id="chart-bars" className="chart-canvas"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
