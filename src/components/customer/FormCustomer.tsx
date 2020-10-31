import React, { useState, useEffect } from 'react';
// thành phần phản ứng được sử dụng để tạo cảnh báo ngọt ngào
import Button from 'react-bootstrap/Button';
import FaceIcon from '@material-ui/icons/Face';
import BrandingWatermarkIcon from '@material-ui/icons/BrandingWatermark';
import { Customer } from '../../share/base-ticket/base-carOwner/Customer';
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import WcIcon from '@material-ui/icons/Wc';
type Props = {
    customer: Customer
    formModal: boolean,
    onCustomer: (customer: Customer) => void
    onCancel: () => void
}



export default function FormCustomer(props: Props) {
    const [customer, setCustomer] = useState<Customer>(props.customer)
    useEffect(() => {
        setCustomer(props.customer)
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
                                        <small>Thêm Khách hàng</small>
                                    </div>
                                    <form role="form">
                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative">
                                                <FormControl variant="outlined" fullWidth>
                                                    <InputLabel >Tên khách hàng</InputLabel>
                                                    <OutlinedInput
                                                        endAdornment={<FaceIcon />}
                                                        fullWidth
                                                        labelWidth={200}
                                                        value={customer.name || ""}
                                                        onChange={(event) => {
                                                            setCustomer({ ...customer, name: event.target.value })
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
                                                        value={customer.CMND || ""}
                                                        onChange={(event) => {
                                                            setCustomer({ ...customer, CMND: event.target.value })
                                                        }}
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative">
                                                <FormControl variant="outlined" fullWidth>
                                                    <InputLabel >Email</InputLabel>
                                                    <OutlinedInput
                                                        endAdornment={<EmailIcon />}
                                                        fullWidth
                                                        labelWidth={200}
                                                        value={customer.email || ""}
                                                        onChange={(event) => {
                                                            setCustomer({ ...customer, email: event.target.value })
                                                        }}
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative">
                                                <FormControl variant="outlined" fullWidth>
                                                    <InputLabel >Số điện thoại </InputLabel>
                                                    <OutlinedInput
                                                        endAdornment={<PhoneIcon />}
                                                        fullWidth
                                                        labelWidth={200}
                                                        value={customer.phoneNumber || ""}
                                                        onChange={(event) => {
                                                            setCustomer({ ...customer, phoneNumber: event.target.value })
                                                        }}
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>


                                        {/* Ngày sinh  */}
                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative">
                                                <FormControl variant="outlined" fullWidth>
                                                    <InputLabel >Ngày sinh</InputLabel>
                                                    <OutlinedInput
                                                        fullWidth
                                                        labelWidth={200}
                                                        defaultValue={"2020-10-14"} 
                                                        type={"date"}
                                                        onChange={(event) => {
                                                            setCustomer({ ...customer, BirthAt: new Date(event.target.value) })
                                                        }}
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative">
                                                

                                                <FormControl variant="outlined" fullWidth>
                                                    <InputLabel id="demo-simple-select-outlined-label">Giới tính </InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-outlined-label"
                                                        id="demo-simple-select-outlined"
                                                        defaultValue = {10}
                                                        label="Age"
                                                    >
                                                        <MenuItem value="">
                                                            <em>None</em>
                                                        </MenuItem>
                                                        <MenuItem value={10}>Nam</MenuItem>
                                                        <MenuItem value={20}>Nư</MenuItem>
                                                        <MenuItem value={30}>Bê đê</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </div>


                                        <div className="text-center">
                                            <Button color="success"
                                                onClick={() => {
                                                    props.onCustomer(customer);
                                                }}
                                            >Thêm</Button>
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


