import React, { useEffect, useState } from 'react';
// thành phần phản ứng được sử dụng để tạo cảnh báo ngọt ngào
import ReactBSAlert from "react-bootstrap-sweetalert";
import Button from 'react-bootstrap/Button';

import FaceIcon from '@material-ui/icons/Face';

import { Car, statusCar } from '../../share/base-ticket/base-carOwner/Car';
import { TypeCar } from '../../share/base-ticket/base-carOwner/TypeCar';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@material-ui/core';

type Props = {
    car: Car
    formModal: boolean,
    onCar: (car: Car) => void,
    typeCar: TypeCar[]
    onCancel: () => void
}


export default function FormCar(props: Props) {
    const [car, setCar] = useState<Car>(props.car)

    useEffect(() => {
        setCar(props.car);
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
                                        <small>Thêm xe</small>
                                    </div>
                                    <form role="form">

                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative">

                                                <FormControl variant="outlined" fullWidth>
                                                    <InputLabel >Tên xe</InputLabel>
                                                    <OutlinedInput
                                                        endAdornment={<FaceIcon />}
                                                        fullWidth
                                                        labelWidth={200}
                                                        defaultValue={""}
                                                        value={car.name || ""}
                                                        onChange={(event) => {
                                                            setCar({ ...car, name: event.target.value })
                                                        }}
                                                    />
                                                </FormControl>


                                            </div>
                                        </div>


                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative">

                                                <FormControl variant="outlined" fullWidth>
                                                    <InputLabel >Biển số xe</InputLabel>
                                                    <OutlinedInput
                                                        endAdornment={<FaceIcon />}
                                                        fullWidth
                                                        labelWidth={200}
                                                        defaultValue={""}
                                                        value={car.licensePlates || ""}
                                                        onChange={(event) => {
                                                            setCar({ ...car, licensePlates: event.target.value })
                                                        }}
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>


                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative">
                                                <FormControl variant="outlined" fullWidth>
                                                    <InputLabel >Xuất xứ</InputLabel>
                                                    <OutlinedInput
                                                        endAdornment={<FaceIcon />}
                                                        fullWidth
                                                        labelWidth={200}
                                                        defaultValue={""}
                                                        value={car.origin || ""}
                                                        onChange={(event) => {
                                                            setCar({ ...car, origin: event.target.value })
                                                        }}
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>

                                        {/* phân này là phần thêm này nhập  */}
                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative">

                                                <FormControl variant="outlined" fullWidth>
                                                    <InputLabel >Xuất xứ</InputLabel>
                                                    <OutlinedInput
                                                        fullWidth
                                                        labelWidth={200}
                                                        defaultValue={"2020-10-14"} 
                                                        type="date" 
                                                        onChange={(event) => {
                                                            console.log(event.target.value)
                                                            setCar({ ...car, entryAt: new Date(event.target.value) })
                                                        }}
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>

                                        {/* //phần này là trạng thái xe */}
                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative">


                                                <FormControl variant="outlined" fullWidth >
                                                    <InputLabel id="demo-simple-select-outlined-label">Trạng thái</InputLabel>
                                                    <Select
                                                        defaultValue = {statusCar.using}
                                                        
                                                        onChange={(event, value : any ) => {
                                                            setCar({ ...car, statusCar: value })
                                                        }}
                                                        labelWidth = {200}
                                                        
                                                    >
                                                        <MenuItem value="">
                                                            
                                                        </MenuItem>
                                                        <MenuItem value={statusCar.using}>{statusCar.using}</MenuItem>
                                                        <MenuItem value={statusCar.fixing}>{statusCar.fixing}</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </div>

                                        {/* //phần này là loại xe */}
                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative">
                                                {/* <div className="input-group-prepend">
                                                <span className="input-group-text"><RecentActorsIcon /></span>
                                            </div> */}
                                                <Autocomplete
                                                    options={props.typeCar}
                                                    getOptionLabel={(option: TypeCar) => option.nameTypeCar || ""}
                                                    fullWidth
                                                    onChange={(event: any, newValue: any) => {
                                                        console.log(newValue)
                                                        setCar({ ...car, typeCarId: newValue?._id || "" })
                                                    }}
                                                    renderInput={(params) => <TextField {...params} label="Chức vụ" variant="outlined" />}
                                                />
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <Button color="success"
                                                onClick={() => {
                                                    props.onCar(car);
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




