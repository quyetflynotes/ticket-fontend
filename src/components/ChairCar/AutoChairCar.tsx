import React, { useState } from 'react';
// thành phần phản ứng được sử dụng để tạo cảnh báo ngọt ngào
import Button from 'react-bootstrap/Button';
import FaceIcon from '@material-ui/icons/Face';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { FormControl, InputLabel, OutlinedInput } from '@material-ui/core';
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';

type Props = {
    formModal: boolean,
    onChairCar: (params: any) => void,
}

export default function AutoChairCar(props: Props) {
    const [chairCar, setChairCar] = useState<any>({})

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
                                                    <InputLabel >Số tầng</InputLabel>
                                                    <OutlinedInput
                                                        endAdornment={<ListAltIcon />}
                                                        fullWidth
                                                        labelWidth={200}
                                                        type = {"number"}
                                                        defaultValue={""}
                                                        value={chairCar.floor || ""}
                                                        onChange={(event) => {
                                                            let getValue: any = event.target.value;
                                                            getValue = parseInt(getValue)
                                                            
                                                                if(getValue==1 || getValue ==2){
                                                                    
                                                                }
                                                                else {
                                                                    getValue =1;
                                                                }
                                                            if(event)
                                                            setChairCar({ ...chairCar,floor : getValue })
                                                        }}
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>
                                        
                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative">
                                                <FormControl variant="outlined" fullWidth>
                                                    <InputLabel >Số hàng</InputLabel>
                                                    <OutlinedInput
                                                        endAdornment={<ViewHeadlineIcon />}
                                                        fullWidth
                                                        labelWidth={200}
                                                        defaultValue={""}
                                                        type = {"number"}
                                                        value={chairCar.row || ""}
                                                        onChange={(event) => {
                                                            let getValue : any  = event.target.value;
                                                            getValue = parseInt(getValue);
                                                            if(!(getValue >0)) getValue =1;
                                                            setChairCar({ ...chairCar,row : getValue })
                                                        }}
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative">
                                                <FormControl variant="outlined" fullWidth>
                                                    <InputLabel >Số luồng</InputLabel>
                                                    <OutlinedInput
                                                        endAdornment={<ViewWeekIcon />}
                                                        fullWidth
                                                        labelWidth={200}
                                                        type = {"number"}
                                                        defaultValue={""}
                                                        value={chairCar.collumn || ""}
                                                        onChange={(event) => {
                                                            let getValue : any  = event.target.value;
                                                            getValue = parseInt(getValue);
                                                            if(!(getValue > 0 && getValue <=5)){
                                                                getValue = 1
                                                            }

                                                            setChairCar({ ...chairCar,collumn : getValue })
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
                                            >Tạo tự động ghế</Button>
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




