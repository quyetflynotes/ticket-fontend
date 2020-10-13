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
import Autocomplete from '@material-ui/lab/Autocomplete';
import { FormControl, InputLabel, OutlinedInput, TextField } from '@material-ui/core';
import { PostionStaff } from '../../share/base-ticket/base-carOwner/PostionStaff';

type Props = {
    staff: Staff
    formModal: boolean,
    listPostion: PostionStaff[]
    onStaff: (staff: Staff) => void
    onCancel: () => void
}

type State = {
    staff: Staff,

}

export default function FormNhanVien(props: Props) {
    const [staff, setStaff] = useState<Staff>(props.staff);
    useEffect(() => {
        setStaff(props.staff);
    }, [props])
    return (
        <div>
            <div className={props.formModal ? "modal fade show show-dialog" : "modal fade hidden-dialog"} id="modal-form" tabIndex={-1} role="dialog" aria-labelledby="modal-form" aria-hidden="true" aria-modal="true">
                <div className="modal-dialog modal- modal-dialog-centered modal-sm" role="document">
                    <div className="modal-content">
                        <div className="modal-body p-0">
                            <div className="card bg-secondary border-0 mb-0">
                                <div className="card-body px-lg-5 py-lg-5">
                                    <div className="text-center text-muted mb-4">
                                        <small>Thêm nhân viên</small>
                                    </div>
                                    <form role="form">

                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative bg-white" >
                                                <FormControl variant="outlined" fullWidth>
                                                    <InputLabel >Tên nhân viên</InputLabel>
                                                    <OutlinedInput
                                                        endAdornment={<FaceIcon />}
                                                        fullWidth
                                                        labelWidth={200}
                                                        value={staff.name || ""}
                                                        onChange={(event) => {
                                                            setStaff({ ...staff, name: event.target.value })
                                                        }}
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative bg-white">
                                                <FormControl variant="outlined" fullWidth>
                                                    <InputLabel >Số điện thoai</InputLabel>
                                                    <OutlinedInput
                                                        endAdornment={<FaceIcon />}
                                                        fullWidth
                                                        labelWidth={200}
                                                        value={staff.phoneNumer || ""}
                                                        onChange={(event) => {
                                                            setStaff({ ...staff, phoneNumer: event.target.value })
                                                        }}
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative">
                                                <FormControl variant="outlined" fullWidth>
                                                    <InputLabel >CMND</InputLabel>
                                                    <OutlinedInput
                                                        endAdornment={<BrandingWatermarkIcon />}
                                                        fullWidth
                                                        labelWidth={200}
                                                        value={staff.identityCard || ""}
                                                        onChange={(event) => {
                                                            setStaff({ ...staff, identityCard: event.target.value })
                                                        }}
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative">

                                                <FormControl variant="outlined" fullWidth>
                                                    <InputLabel >Địa chỉ</InputLabel>
                                                    <OutlinedInput
                                                        endAdornment={<BrandingWatermarkIcon />}
                                                        fullWidth
                                                        labelWidth={200}
                                                        value={staff.identityCard || ""}
                                                        onChange={(event) => {
                                                            setStaff({ ...staff, address: event.target.value })
                                                        }}
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative">
                                                <FormControl variant="outlined" fullWidth>
                                                    <InputLabel >Ngày sinh </InputLabel>
                                                    <OutlinedInput
                                                        endAdornment={<BrandingWatermarkIcon />}
                                                        fullWidth
                                                        labelWidth={200}
                                                        type="date"
                                                        defaultValue={"2020-10-14"} 
                                                        onChange={(event) => {
                                                            setStaff({ ...staff, birthAt: new Date(event.target.value) })
                                                        }}
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
                                                    options={props.listPostion}
                                                    getOptionLabel={(option: PostionStaff) => option.name || ""}
                                                    fullWidth
                                                    onChange={(event: any, newValue: any) => {
                                                        console.log(newValue)
                                                        setStaff({ ...staff, positionId: newValue?._id || "" })
                                                    }}
                                                    renderInput={(params) => <TextField {...params} onChange={(event) => { console.log(event.target) }} label="Chức vụ" variant="outlined" />}
                                                />
                                            </div>
                                        </div>



                                        <div className="text-center">
                                            <Button color="success"
                                                onClick={() => {
                                                    props.onStaff(staff);
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
    )
}




