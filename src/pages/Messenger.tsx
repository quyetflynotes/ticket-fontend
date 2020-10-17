import React, { Component, useEffect, useState } from 'react';
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
import Swal from 'sweetalert2'
import { useSelector, useDispatch } from 'react-redux';





type State = {
    formModal: boolean,
}



export default function Messenger() {
    console.log("")


    const [state, setState] = useState<State>({
        formModal: true
    })

    const dispatch = useDispatch();
    console.log(dispatch);

    const stateRedux = useSelector((state: any) => state.message);
    useEffect(() => {
        console.log(stateRedux)
        return () => {

        }
    }, [stateRedux])



    return (
        <div>
            <ReactBSAlert
                
                style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                title="Cảnh báo"
                show={stateRedux.show}
                onConfirm={() => {

                }}
                onCancel={() => setState({ formModal: false })}
                confirmBtnBsStyle="success"
                confirmBtnText="Ok"
                btnSize=""
            >
                {stateRedux.message}
            </ReactBSAlert>
        </div>
    )
}
