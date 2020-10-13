import React, { useState, useEffect } from 'react';
// thành phần phản ứng được sử dụng để tạo cảnh báo ngọt ngào
import ReactBSAlert from "react-bootstrap-sweetalert";
import Button from 'react-bootstrap/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ImageIcon from '@material-ui/icons/Image';
import FaceIcon from '@material-ui/icons/Face';
import PhoneIcon from '@material-ui/icons/Phone';
import BrandingWatermarkIcon from '@material-ui/icons/BrandingWatermark';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import AddIcon from '@material-ui/icons/Add';
import { Staff } from "../../share/base-ticket/base-carOwner/Staff";
import { Trip } from '../../share/base-ticket/base-carOwner/Trip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Car } from '../../share/base-ticket/base-carOwner/Car';
import { FormControl, Input, InputLabel, OutlinedInput, TextField } from '@material-ui/core';

type Props = {
    trip: Trip
    formModal: boolean,
    onTrip: (trip: Trip) => void
    onCancel: () => void,
    cars: Car[];
    staff: Staff[];
}



export default function TripForm(props: Props) {
    const [trip, setTrip] = useState<Trip>(props.trip);
    useEffect(() => {
        setTrip(props.trip);
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
                                            <small>Thêm lộ trình</small>
                                        </div>
                                        <form role="form">

                                            <div className="form-group">
                                                <div className="input-group input-group-merge input-group-alternative">
                                                    <FormControl variant="outlined" fullWidth>
                                                        <InputLabel >Địa điểm bắt đầu</InputLabel>
                                                        <OutlinedInput
                                                            endAdornment={
                                                                <FaceIcon />
                                                            }
                                                            fullWidth
                                                            value={trip.localStart || ""}
                                                            onChange={(event) => {
                                                                setTrip({ ...trip, localStart: event.target.value })
                                                            }}
                                                            labelWidth={200}
                                                        />
                                                    </FormControl>

                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group input-group-merge input-group-alternative">
                                                    <FormControl variant="outlined" fullWidth>
                                                        <InputLabel >Địa điểm kết thúc</InputLabel>
                                                        <OutlinedInput
                                                            endAdornment={<PhoneIcon />}
                                                            fullWidth
                                                            value={trip.localEnd || ""}
                                                            onChange={(event) => {
                                                                setTrip({ ...trip, localEnd: event.target.value })
                                                            }}
                                                            labelWidth={200}
                                                        />
                                                    </FormControl>
                                                </div>
                                            </div>

                                            {/* phần sẽ xet ngày dự kiện bắt đầu  */}
                                            <div className="form-group">
                                                <div className="input-group input-group-merge input-group-alternative">
                                                    <FormControl variant="outlined" fullWidth>
                                                        <InputLabel >Thời gian bắt đầu</InputLabel>
                                                        <OutlinedInput
                                                            // endAdornment={<PhoneIcon />}
                                                            fullWidth
                                                            defaultValue={"2020-10-06T16:32"} 
                                                            type={"datetime-local"}
                                                            onChange={(e) => {
                                                                console.log(e.target.value)
                                                                setTrip({ ...trip, startAt: new Date(e.target.value) })
                                                            }}
                                                            labelWidth={200}
                                                        />
                                                    </FormControl>
                                                </div>
                                            </div>
                                            {/* phần này sẽ xet ngày dự kiến kết thúc */}
                                            <div className="form-group">
                                                <div className="input-group input-group-merge input-group-alternative">
                                                    <FormControl variant="outlined" fullWidth>
                                                        <InputLabel >Thời gian kết thúc</InputLabel>
                                                        <OutlinedInput
                                                            // endAdornment={<PhoneIcon />}
                                                            fullWidth
                                                            defaultValue={"2020-10-06T16:32"} 
                                                            
                                                            type={"datetime-local"}
                                                            onChange={(e) => setTrip({ ...trip, endAt: new Date(e.target.value) })}
                                                            labelWidth={200}
                                                        />
                                                    </FormControl>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <div className="input-group input-group-merge input-group-alternative">
                                                    <Autocomplete
                                                        options={props.cars}
                                                        getOptionLabel={(option: Car) => `${option.name} (${option.licensePlates})` || ""}
                                                        fullWidth
                                                        onChange={(event: any, newValue: any) => {
                                                            setTrip({ ...trip, carId: newValue?._id || "" })
                                                        }}
                                                        renderInput={(params) => <TextField {...params} label="Tên xe" variant="outlined" />}
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <div className="input-group input-group-merge input-group-alternative">
                                                    <Autocomplete
                                                        options={props.staff}
                                                        getOptionLabel={(option: Staff) => option.name || ""}
                                                        fullWidth
                                                        onChange={(event: any, newValue: any) => {
                                                            setTrip({ ...trip, driverId: newValue?._id || "" })
                                                        }}
                                                        renderInput={(params) => <TextField {...params} label="Tài xế" variant="outlined" />}
                                                    />
                                                </div>
                                            </div>

                                            {/* <div className="form-group">
                                                <div className="input-group input-group-merge input-group-alternative">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><RecentActorsIcon /></span>
                                                    </div>
                                                    <Autocomplete
                                                        options={props.staff}
                                                        getOptionLabel={(option: Staff) => option.name  || ""}
                                                        fullWidth
                                                        onChange={(event: any, newValue: any) => {
                                                            setTrip({ ...trip, driverId: newValue?._id || "" })
                                                        }}
                                                        renderInput={(params) => <TextField {...params} label="Lơ xe" variant="filled" />}
                                                    />
                                                </div>
                                            </div> */}

                                            <div className="text-center">
                                                <Button color="success"
                                                    onClick={() => {
                                                        props.onTrip(trip);
                                                    }}
                                                >Thêm</Button>
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



