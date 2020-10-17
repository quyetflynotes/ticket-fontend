import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import NhapThongTinVe from "./NhapThongTinVe"
import { Ticket } from "../../share/base-ticket/base-carOwner/Ticket"
import { TripService } from '../../Services/TripService'
import {HelpRouter} from "../../Helpers/HelpRouter"
import { TicketService } from '../../Services/TicketService'


export default function Diagram() {
    const [showFormInput, setShowFormInput] = useState<boolean>(false)
    const [selectedItem, setSelectedItem] = useState<Ticket>();
    const [listChair, setListChair] = useState<Array<any>>([]);

    useEffect(() => {
        getListChair(HelpRouter.getIdFromPath(window.location.pathname))
        return () => {
        }
    }, [])

    function getListChair(id: string) {
        TripService.getChairByTrip(id).then(res => {
            if (res) {
                setListChair(res);
            }
        })
    }

    function handleShowForm(item: any) {
        setSelectedItem(item);
        setShowFormInput(true);
    }
    function onCloseForm() {
        console.log("on close show")
        setShowFormInput(false);
        setSelectedItem({})
    }
    function onSave(ticket : Ticket) {
        setShowFormInput(false);
        console.log(ticket)
        // setSelectedItem({});
        TicketService.create(ticket);
        getListChair(HelpRouter.getIdFromPath(window.location.pathname))
    }
    return (
        <div>
            <NhapThongTinVe
                onSave = {onSave}
                infoTicket={{...selectedItem}}
                showForm={showFormInput}
                onClose = {onCloseForm}
            />
            
            <div className="" role="document">
                <div className="modal-content">
                    <div className="modal-body p-0">
                        <div className="card bg-secondary border-0 mb-0">
                            <div className="card-body">
                                <div className="card">
                                    {/* Card header */}
                                    <div className="card-header border-0">
                                        <div className="row">
                                            <div className="col-6">
                                                <h3 className="mb-0">Danh sách ghế</h3>
                                            </div>
                                            <div className="col-12 text-center mt-4">
                                                <span>Chú thích:</span>
                                                <svg className="ml-5" xmlns="http://www.w3.org/2000/svg" width="24" height="34" viewBox="0 0 28 44"><g fill="#fff" stroke="#000" stroke-width=".5"><g><rect width="28" height="44" rx="4" stroke="none"></rect><rect x=".25" y=".25" width="27.5" height="43.5" rx="3.75" fill="none"></rect></g><g transform="translate(2)"><rect width="24" height="34" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="23.5" height="33.5" rx="1.75" fill="none"></rect></g><g transform="translate(6 36)"><rect width="16" height="8" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="15.5" height="7.5" rx="1.75" fill="none"></rect></g></g></svg>
                                                <span className="ml-3">Còn trống</span>
                                                <svg className="ml-5" xmlns="http://www.w3.org/2000/svg" width="24" height="34" viewBox="0 0 28 44"><g fill="gray" stroke="#000" stroke-width=".5"><g><rect width="28" height="44" rx="4" stroke="none"></rect><rect x=".25" y=".25" width="27.5" height="43.5" rx="3.75" fill="none"></rect></g><g transform="translate(2)"><rect width="24" height="34" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="23.5" height="33.5" rx="1.75" fill="none"></rect></g><g transform="translate(6 36)"><rect width="16" height="8" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="15.5" height="7.5" rx="1.75" fill="none"></rect></g></g></svg>
                                                <span className="ml-3">Đã đặt</span>
                                                <svg className="ml-5" xmlns="http://www.w3.org/2000/svg" width="24" height="34" viewBox="0 0 28 44"><g fill="#5e72e4" stroke="#000" stroke-width=".5"><g><rect width="28" height="44" rx="4" stroke="none"></rect><rect x=".25" y=".25" width="27.5" height="43.5" rx="3.75" fill="none"></rect></g><g transform="translate(2)"><rect width="24" height="34" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="23.5" height="33.5" rx="1.75" fill="none"></rect></g><g transform="translate(6 36)"><rect width="16" height="8" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="15.5" height="7.5" rx="1.75" fill="none"></rect></g></g></svg>
                                                <span className="ml-3">Đang chọn</span>
                                            </div>

                                            {/*  */}
                                            <div className="tangGhe">

                                                {
                                                    listChair.map((floor: any) => {
                                                        return (
                                                            <div className="tang">
                                                                <div className="text-center text-gray-dark">
                                                                    <span>Tầng 1</span>
                                                                </div>
                                                                <div className="danhSachGhe">
                                                                    <div className="ghe">
                                                                        <img alt="" width="40" color="white" src="/images/car-steering-wheel.svg" />
                                                                    </div>

                                                                </div>
                                                                {
                                                                    floor.map((rows: any) => {
                                                                        return (
                                                                            <div className="danhSachGhe">
                                                                                {
                                                                                    rows.map((column: Ticket) => {
                                                                                        if (column._id) {
                                                                                            return (
                                                                                                <div className="ghe" onClick={() =>{ handleShowForm(column)  }}>
                                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="50" viewBox="0 0 28 44"><g fill="#gray" stroke="#000" stroke-width=".5"><g><rect width="28" height="44" rx="4" stroke="none"></rect><rect x=".25" y=".25" width="27.5" height="43.5" rx="3.75" fill="none"></rect></g><g transform="translate(2)"><rect width="24" height="34" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="23.5" height="33.5" rx="1.75" fill="none"></rect></g><g transform="translate(6 36)"><rect width="16" height="8" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="15.5" height="7.5" rx="1.75" fill="none"></rect></g></g></svg>
                                                                                                </div>
                                                                                            )
                                                                                        }
                                                                                        if (column.tripId) {
                                                                                            return (
                                                                                                <div className="ghe" onClick={() =>{ handleShowForm(column) }}>
                                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="50" viewBox="0 0 28 44"><g fill="#fff" stroke="#000" stroke-width=".5"><g><rect width="28" height="44" rx="4" stroke="none"></rect><rect x=".25" y=".25" width="27.5" height="43.5" rx="3.75" fill="none"></rect></g><g transform="translate(2)"><rect width="24" height="34" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="23.5" height="33.5" rx="1.75" fill="none"></rect></g><g transform="translate(6 36)"><rect width="16" height="8" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="15.5" height="7.5" rx="1.75" fill="none"></rect></g></g></svg>
                                                                                                </div>
                                                                                            )
                                                                                        }
                                                                                        else {
                                                                                            return (<div className="ghe" >
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" style={{ visibility: "hidden" }} width="30" height="50" viewBox="0 0 28 44"><g fill="#fff" stroke="#000" stroke-width=".5"><g><rect width="28" height="44" rx="4" stroke="none" ></rect><rect x=".25" y=".25" width="27.5" height="43.5" rx="3.75" fill="none"></rect></g><g transform="translate(2)"><rect width="24" height="34" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="23.5" height="33.5" rx="1.75" fill="none"></rect></g><g transform="translate(6 36)"><rect width="16" height="8" rx="2" stroke="none"></rect><rect x=".25" y=".25" width="15.5" height="7.5" rx="1.75" fill="none"></rect></g></g></svg>

                                                                                            </div>)
                                                                                        }
                                                                                    })
                                                                                }
                                                                            </div>
                                                                        )
                                                                    })
                                                                }

                                                            </div>
                                                        )
                                                    })

                                                }

                                                {/*  */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Button color="warning" className="btn-warning float-right" onClick={() => {}}>Hủy</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
