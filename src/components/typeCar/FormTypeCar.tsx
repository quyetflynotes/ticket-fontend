import React, { useEffect, useState } from 'react';
import { TypeCar } from '../../share/base-ticket/base-carOwner/TypeCar';
import Button from 'react-bootstrap/Button';
import FaceIcon from '@material-ui/icons/Face';
import PhoneIcon from '@material-ui/icons/Phone';
import { FormControl, InputLabel, OutlinedInput } from '@material-ui/core';


type Props = {
    formModal: boolean,
    onTypeCar: Function,
    onCancel: Function,
    typeCar: TypeCar
}

function FormTypeCar(props: Props) {
    const [typeCar, setTypeCar] = useState<TypeCar>({})
    useEffect(() => {
        setTypeCar(props.typeCar);
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
                                            <small>Thêm nhân viên</small>
                                        </div>
                                        <form role="form">

                                            <div className="form-group">
                                                <div className="input-group input-group-merge input-group-alternative">
                                                    <FormControl variant="outlined" fullWidth>
                                                        <InputLabel >Tên Loại Xe</InputLabel>
                                                        <OutlinedInput
                                                            endAdornment={<FaceIcon />}
                                                            fullWidth
                                                            labelWidth={200}
                                                            value={typeCar.nameTypeCar || ""}
                                                            onChange={(event) => {
                                                                setTypeCar({ ...typeCar, nameTypeCar: event.target.value })
                                                            }}
                                                        />
                                                    </FormControl>
                                                </div>
                                            </div>


                                            <div className="form-group">
                                                <div className="input-group input-group-merge input-group-alternative">
                                                    <FormControl variant="outlined" fullWidth>
                                                        <InputLabel >Mô tả</InputLabel>
                                                        <OutlinedInput
                                                            endAdornment={<FaceIcon />}
                                                            fullWidth
                                                            labelWidth={200}
                                                            value={typeCar.description || ""}
                                                            onChange={(event) => {
                                                                setTypeCar({ ...typeCar, description: event.target.value })
                                                            }}
                                                        />
                                                    </FormControl>
                                                </div>
                                            </div>



                                            <div className="text-center">
                                                <Button color="success"
                                                    onClick={() => {
                                                        props.onTypeCar(typeCar);
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
    );
}

export default FormTypeCar;