import React, { Component, useEffect, useState } from 'react';
import FooterDashboard from '../components/FooterDashboard';
import HeaderDashboard from '../components/HeaderDashboard';
import NavbarDashboard from '../components/NavbarDashboard';
import Sidebar from '../components/Sidebar';
import Tables from '../components/Staff/TablesNhanVien';
import { StaffService } from '../Services/StaffService';
import { Staff } from '../share/base-ticket/base-carOwner/Staff';
import { Paging } from '../share/base-ticket/Paging';
import Pagination from '@material-ui/lab/Pagination';
import FormNhanVien from '../components/Staff/FormNhanVien';
import { PostionStaff } from '../share/base-ticket/base-carOwner/PostionStaff';
import { PositionStaffCarService } from '../Services/PositionStaffCarService';



type State = {
    staffs: Paging<Staff>,
    showForm: boolean,
    staffForm: Staff,
    listPostion: PostionStaff[], 
}







export default function NhanVien() {
    const [state, setState] = useState<State>({
        staffs: { page: 1, total: 1, totalPages: 1, rows: [], pageSize: 1 },
        showForm: false,
        staffForm: {},
        listPostion: [], 
    })
    const [search , setSearch] = useState<string>("")

    useEffect(() => {
        PositionStaffCarService.list().then((res: Paging<PostionStaff>) => {
            setState({
                ...state,
                listPostion: res.rows
            })
        })
        getData(1);
        
    },[])

    


    async function getData(page: number = 1, search : string = "") {
        StaffService.list(page, search).then((staffPaging: Paging<Staff>) => {
            if (staffPaging) {
                setState({
                    ...state,
                    staffs: staffPaging
                })
            }
        })
    }

    function staffForm(staff: Staff) {
        setState({
            ...state,
            staffForm: staff,
            showForm: true
        })
    }

    function staffFormCreate(staff: Staff) {
        StaffService.create(staff).then((res: any) => {
            if (res) {
                getData(state.staffs.page);
            }
        })
        setState({
            ...state,
            showForm: false
        })
    }

    function staffDelete(id: string) {
        StaffService.delete(id).then((res: any) => {
            if (res) {
                getData(state.staffs.page);
            }
        })
    }

    function onCancel() {
        setState({
            ...state,
            showForm: false
        })
    }

    function onSearch(search : any) {
        getData(1, search).then(((res : any)=>{
            setSearch(search)
        }))
    }

    return (
        <div>
            <FormNhanVien
                formModal={state.showForm}
                staff={state.staffForm}
                onStaff={staffFormCreate}
                listPostion={state.listPostion}
                onCancel={onCancel}
            ></FormNhanVien>
            <Sidebar></Sidebar>

            <div className="main-content" id="panel">
                <NavbarDashboard
                    search={onSearch}
                ></NavbarDashboard >
                <div className="header bg-primary pb-6">
                    <div className="container-fluid">
                        <HeaderDashboard></HeaderDashboard>
                    </div>
                </div>
                <div className="container-fluid mt--6">
                    <Tables
                        staffs={state.staffs.rows}
                        onStaffs={staffForm}
                        onDeleteStaff={staffDelete}
                    ></Tables>
                    <Pagination count={state.staffs.totalPages} onChange={(event, value) => {
                        getData(value);
                    }} color="primary" />
                    <FooterDashboard></FooterDashboard>
                </div>
            </div>
        </div>
    )
}
