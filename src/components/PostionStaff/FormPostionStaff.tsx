import React, { useState, useEffect } from 'react';
// thành phần phản ứng được sử dụng để tạo cảnh báo ngọt ngào
import Button from 'react-bootstrap/Button';
import FaceIcon from '@material-ui/icons/Face';
import { PostionStaff } from '../../share/base-ticket/base-carOwner/PostionStaff';
import { FormControl, InputLabel, OutlinedInput } from '@material-ui/core';


type Props = {
    postion: PostionStaff
    formModal: boolean,
    onPostion: (staff: PostionStaff) => void
    onCancel: () => void
}





export default function FormPostionStaff(props: Props) {
    const [postion, setPostion] = useState<PostionStaff>(props.postion)

    const textButtonEdit = props.postion._id ? "Sua" : "Them"

    useEffect(() => {
        setPostion(props.postion);
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
                                        <small>{textButtonEdit} nhan vien</small>
                                    </div>
                                    <form role="form">
                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative">

                                                <FormControl variant="outlined" fullWidth>
                                                    <InputLabel>Tên chức vụ</InputLabel>
                                                    <OutlinedInput
                                                        endAdornment={<FaceIcon />}
                                                        fullWidth
                                                        labelWidth={200}
                                                        value={postion.name || ""}
                                                        onChange={(event) => {
                                                            setPostion({ ...postion, name: event.target.value })
                                                        }}
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative">

                                                <FormControl variant="outlined" fullWidth>
                                                    <InputLabel>Mô tả</InputLabel>
                                                    <OutlinedInput
                                                        endAdornment={<FaceIcon />}
                                                        fullWidth
                                                        labelWidth={200}
                                                        value={postion.description || ""}
                                                        onChange={(event) => {
                                                            setPostion({ ...postion, description: event.target.value })
                                                        }}
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <Button color="success"
                                                onClick={() => {
                                                    props.onPostion(postion);
                                                }}
                                            >{textButtonEdit}</Button>
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



