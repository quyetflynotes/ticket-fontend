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
import {dispatch} from "../Redux/Store"
import { typeMessenge } from '../Redux/Message';





type State = {
    formModal: boolean,
}



export default function Messenger() {
    

    const stateRedux = useSelector((state: any) => state.message);
    function getTitle(type  : typeMessenge){
        if(type == typeMessenge.error){
            return "Lỗi"
        }
        if(type == typeMessenge.success){
            return "Thành công"
        }
        if(type == typeMessenge.warning){
            return "Cảnh báo"
        }
    }
    
    return (
        <div>
            <ReactBSAlert
                warning = {stateRedux.type == typeMessenge.warning ? true : false}
                error = {stateRedux.type == typeMessenge.error ? true : false}
                success ={stateRedux.type == typeMessenge.success ? true : false} 
                style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                title={getTitle(stateRedux.type)}
                show={stateRedux.show}
                onConfirm={() => {
                    dispatch.message.close(false)
                }}
                onCancel={() => dispatch.message.close(false)}
                confirmBtnBsStyle={(stateRedux.type == typeMessenge.success) ? "success" : "warning"}
                confirmBtnText="Ok"
                btnSize=""
            >
                {stateRedux.message}
            </ReactBSAlert>
        </div>
    )
}
