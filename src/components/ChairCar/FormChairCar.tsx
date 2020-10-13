import React, { useEffect, useState } from 'react';
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
import { Car, statusCar } from '../../share/base-ticket/base-carOwner/Car';
import { TypeCar } from '../../share/base-ticket/base-carOwner/TypeCar';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@material-ui/core';
import { ChairCar } from '../../share/base-ticket/base-carOwner/ChairCar';

type Props = {
    chairCar: ChairCar
    formModal: boolean,
    onChairCar: (chairCar: ChairCar) => void,
    onCancel: () => void
}


export default function FormChairCar(props: Props) {
    const [chairCar, setChairCar] = useState<ChairCar>(props.chairCar)

    useEffect(() => {
        setChairCar(props.chairCar);
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
                                                    <InputLabel >Xuất xứ</InputLabel>
                                                    <OutlinedInput
                                                        endAdornment={<FaceIcon />}
                                                        fullWidth
                                                        labelWidth={200}
                                                        defaultValue={""}
                                                        value={chairCar.codeChair || ""}
                                                        onChange={(event) => {
                                                            setChairCar({ ...chairCar,codeChair : event.target.value })
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
                                                        value={chairCar.description || ""}
                                                        onChange={(event) => {
                                                            setChairCar({ ...chairCar,description : event.target.value })
                                                        }}
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>
                                        






                                        <div className="text-center">
                                            <Button color="success"
                                                onClick={() => {
                                                    props.onChairCar(chairCar);
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




