import React, { useEffect, useState } from 'react';
// thành phần phản ứng được sử dụng để tạo cảnh báo ngọt ngào
import Button from 'react-bootstrap/Button';
import FaceIcon from '@material-ui/icons/Face';
import { FormControl, InputLabel, OutlinedInput } from '@material-ui/core';
import { ChairCar } from '../../share/base-ticket/base-carOwner/ChairCar';

type Props = {
    chairCar: ChairCar
    formModal: boolean,
    onChairCar: (chairCar: ChairCar) => void,
    onCancel: () => void
}


export default function FormChairCar(props: Props) {
    const [chairCar, setChairCar] = useState<ChairCar>(props.chairCar)

    const textButton = props.chairCar ? "Sua" : "Them"

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
                                        <small>{textButton} ghe</small>
                                    </div>
                                    <form role="form">
                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative">
                                                <FormControl variant="outlined" fullWidth>
                                                    <InputLabel >Ma so ghe</InputLabel>
                                                    <OutlinedInput
                                                        endAdornment={<FaceIcon />}
                                                        fullWidth
                                                        label="Ma so ghe"
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
                                                    <InputLabel >Mo ta</InputLabel>
                                                    <OutlinedInput
                                                        endAdornment={<FaceIcon />}
                                                        fullWidth
                                                        label="Mo ta"
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
                                            >{textButton}</Button>
                                            <Button
                                                color="warning"
                                                className="btn-warning"
                                                onClick={() => {
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




