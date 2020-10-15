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
import { Route } from '../../share/base-ticket/base-carOwner/Route';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Car } from '../../share/base-ticket/base-carOwner/Car';
import { FormControl, Input, InputLabel, OutlinedInput, TextField } from '@material-ui/core';
import { HelpTime } from '../../Helpers/HelpTime';

type Props = {
    trip: Route
    formModal: boolean,
    onTrip: (trip: Route) => void
    onCancel: () => void,
    cars: Car[];
    staff: Staff[];
}



export default function RouteForm(props: Props) {
    const [trip, setTrip] = useState<Route>(props.trip);
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
                                                        <InputLabel >Giờ bắt đầu chạy</InputLabel>
                                                        <OutlinedInput
                                                            // endAdornment={<PhoneIcon />}
                                                            fullWidth
                                                            defaultValue={"2020-10-06T16:32"} 
                                                            type={"time"}
                                                            onChange={(e) => {
                                                                setTrip({ ...trip, startAt: HelpTime.convertTimeToDate(e.target.value) })
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
                                                        <InputLabel >Giờ kết thúc dự kiến kết thúc</InputLabel>
                                                        <OutlinedInput
                                                            // endAdornment={<PhoneIcon />}
                                                            fullWidth
                                                            defaultValue={10} 
                                                            
                                                            type={"number"}
                                                            onChange={(e) => setTrip({ ...trip, sumTimeRun:  parseInt(e.target.value) })}
                                                            labelWidth={200}
                                                        />
                                                    </FormControl>
                                                </div>
                                            </div>


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



