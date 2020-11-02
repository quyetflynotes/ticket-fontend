import React, { Component, useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import FooterDashboard from '../components/FooterDashboard';
import HeaderDashboard from '../components/HeaderDashboard';
import NavbarDashboard from '../components/NavbarDashboard';
import InputTimVe from '../components/InputTimVe';
import ErrorKhongGhe from '../components/ErrorKhongGhe';
import FillterVe from '../components/FillterVe';
import TicketItem from '../components/Tick/TicketItem';

import { Trip } from '../share/base-ticket/base-carOwner/Trip';
import { Paging } from '../share/base-ticket/Paging';
import { StaffService } from '../Services/StaffService';
import { RouteService } from '../Services/RouteService';
import { TripService } from '../Services/TripService';
import { Staff } from '../share/base-ticket/base-carOwner/Staff';
import { Car } from '../share/base-ticket/base-carOwner/Car';



export default function TripHomeContainer() {
    const [trips, setTrip] = useState<Paging<Trip>>({ page: 1, total: 1, totalPages: 1, rows: [], pageSize: 1 })
    const [startTime, setStartTime] = useState<Date>();
    const [endTime , setEndTime] = useState<Date>();
    useEffect(() => {
        getData(1);

    }, [])

    async function getData(page: number = 1) {
        let getTrip: Paging<Trip> = await TripService.list(1, "", new Date(), new Date());
        // let getRoute: Paging<Car> = await RouteService.list();
        // let getStaff: Paging<Staff> = await StaffService.list();
        setTrip(getTrip);
    }

    async function searchTicket(search: any) {
        let getTrip: Paging<Trip> = await TripService.list(1, search, new Date(), new Date());
    }

    async function filterStart(startTime : any) {
        let getTrip: Paging<Trip> = await TripService.list(1, "", startTime, endTime);
        setStartTime(new Date(startTime))
        setTrip(getTrip)
    }

    async function filterEnd(endTime : any) {
        let getTrip: Paging<Trip> = await TripService.list(1, "", startTime, endTime);
        setEndTime(new Date(endTime))
        setTrip(getTrip)
    }
    
    

    return (
        <div>
            <div className="main-content" id="panel">
                <NavbarDashboard
                    search = {()=>{}}
                ></NavbarDashboard >
                <div className="header bg-primary pb-6">
                    <div className="container-fluid">
                        <HeaderDashboard></HeaderDashboard>
                    </div>
                </div>
                <div className="container-fluid mt--6">
                    <InputTimVe
                        endTime={filterEnd}
                        startTime={filterStart}
                    ></InputTimVe>
                    <div className="rowVe">
                        {/* <FillterVe></FillterVe> */}
                        <div className="columnVe mt-4">
                            <div>
                                <h3>DANH SÁCH CHUYẾN ĐI KỂ TỪ HÔM NAY</h3>
                            </div>
                            {/* <div className="sortVe">
                                <span style={{ fontSize: "14px" }} className="font-weight-500">Sắp xếp theo:</span>
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
                            </div> */}
                            <div>
                                {trips?.rows?.map((trip: Trip) => {
                                    return (
                                        <TicketItem
                                            trips = {trip}
                                        ></TicketItem>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <FooterDashboard></FooterDashboard>
                </div>
            </div>
        </div>
    )
}
