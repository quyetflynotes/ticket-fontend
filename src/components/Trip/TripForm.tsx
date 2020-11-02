import React, { useState, useEffect } from 'react';
// thành phần phản ứng được sử dụng để tạo cảnh báo ngọt ngào
import ReactBSAlert from "react-bootstrap-sweetalert";
import Button from 'react-bootstrap/Button';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import FaceIcon from '@material-ui/icons/Face';
import PhoneIcon from '@material-ui/icons/Phone';

import { Staff } from "../../share/base-ticket/base-carOwner/Staff";
import { Route } from "../../share/base-ticket/base-carOwner/Route";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Car } from '../../share/base-ticket/base-carOwner/Car';
import { FormControl, Input, InputLabel, OutlinedInput, TextField } from '@material-ui/core';
import { HelpTime } from '../../Helpers/HelpTime';
import { Trip } from '../../share/base-ticket/base-carOwner/Trip';
import moment from "moment";


type Props = {
    trip: Trip
    formModal: boolean,
    onTrip: (trip: Trip) => void
    onCancel: () => void,
    staff: Staff[];
    route : Route[]
}



export default function TripForm(props: Props) {
    const [trip, setTrip] = useState<Trip>(props.trip);

    const textButtonEdit = props.trip._id ? "Sua" : "Them"


    useEffect(() => {
        setTrip({...props.trip,timeStart : new Date(props.trip.timeStart || new Date())});
    }, [props])
    return (
        <div>
            <div>
                <div className={props.formModal ? "modal fade show show-dialog" : "modal fade hidden-dialog"} id="modal-form" tabIndex={-1} role="dialog" aria-labelledby="modal-form" aria-hidden="true" aria-modal="true">
                    <div className="modal-dialog modal- modal-dialog-centered modal-sm" role="document">
                        <div className="modal-content">
                            <div className="modal-body p-0">
                                <div className="card bg-secondary border-0 mb-0">
                                    <div className="card-body px-lg-5 py-lg-5">
                                        <div className="text-center text-muted mb-4">
                                            <small>{textButtonEdit} lộ trình</small>
                                        </div>
                                        <form role="form">

                                            <div className="form-group">
                                                <div className="input-group input-group-merge input-group-alternative">
                                                    <FormControl variant="outlined" fullWidth>
                                                        <InputLabel >Giá Vé</InputLabel>
                                                        <OutlinedInput
                                                            endAdornment={
                                                                <MonetizationOnIcon />
                                                            }
                                                            fullWidth
                                                            value={trip.price || ""}
                                                            type={"number"}
                                                            onChange={(event) => {
                                                                setTrip({ ...trip, price: parseInt(event.target.value) })
                                                            }}
                                                            labelWidth={200}
                                                        />
                                                    </FormControl>
                                                </div>
                                            </div>


                                            <div className="form-group">
                                                <div className="input-group input-group-merge input-group-alternative">
                                                    <FormControl variant="outlined" fullWidth>
                                                        <InputLabel >Thời gian chạy</InputLabel>
                                                        <OutlinedInput
                                                            fullWidth
                                                            value={moment(trip.timeStart).format(
                                                                "YYYY-MM-DD"
                                                            )}
                                                            type={"date"}
                                                            onChange={(event) => {
                                                                setTrip({ ...trip, timeStart: new Date(event.target.value) })
                                                            }}
                                                            labelWidth={200}
                                                        />
                                                    </FormControl>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <div className="input-group input-group-merge input-group-alternative">
                                                    {/* <div className="input-group-prepend">
                                                <span className="input-group-text"><RecentActorsIcon /></span>
                                            </div> */}
                                                    <Autocomplete
                                                        value={
                                                            props.staff.find(staff => {
                                                                return staff._id == trip.driveId
                                                            })
                                                        }
                                                        options={props.staff}
                                                        getOptionLabel={(option: Staff) => option.name || ""}
                                                        fullWidth
                                                        onChange={(event: any, newValue: any) => {
                                                            console.log(newValue)
                                                            setTrip({ ...trip, driveId: newValue._id })
                                                        }}
                                                        renderInput={(params) => <TextField {...params} label="Tài xế" variant="outlined" />}
                                                    />
                                                </div>
                                            </div>

                                            {/* chọn tài xê */}

                                            <div className="form-group">
                                                <div className="input-group input-group-merge input-group-alternative">
                                                    {/* <div className="input-group-prepend">
                                                <span className="input-group-text"><RecentActorsIcon /></span>
                                            </div> */}
                                                    <Autocomplete
                                                        options={props.route}
                                                        getOptionLabel={(option: Route) => `${option.localStart}-${option.localEnd}`}
                                                        fullWidth
                                                        onChange={(event: any, newValue: any) => {
                                                            console.log(newValue)
                                                            setTrip({ ...trip,RouteId : newValue?._id || "" })
                                                        }}
                                                        renderInput={(params) => <TextField {...params} label="Chọn chuyến đi" variant="outlined" />}
                                                    />
                                                </div>
                                            </div>



                                            <div className="text-center">
                                                <Button color="success"
                                                    onClick={() => {
                                                        props.onTrip(trip);
                                                    }}
                                                >{textButtonEdit}</Button>
                                                <Button
                                                    color="warning"
                                                    className="btn-warning"
                                                    onClick={(event) => {
                                                        props.onCancel()
                                                    }}
                                                >Hủy</Button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



