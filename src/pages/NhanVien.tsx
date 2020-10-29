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
import FormAccount from '../components/Staff/FormAccount';
import { AccountService } from '../Services/AccountService';
import { Account } from '../share/base-ticket/base-carOwner/Account';










export default function NhanVien() {

    const [staffs, setStaff] = useState<Paging<Staff>>({ page: 1, total: 1, totalPages: 1, rows: [], pageSize: 1 });
    const [staffForm, setStaffForm] = useState<Staff>({});
    const [listPostion, setListPostion] = useState<PostionStaff[]>([]);

    const [acccountForm, setAccountForm] = useState<Staff>({});


    const [isShowForm, setShowForm] = useState(false);
    const [isShowFormAccount, setShowFormAccount] = useState(false);

    useEffect(() => {
        PositionStaffCarService.list().then((res: Paging<any>) => {

            setListPostion(res.rows);
            getData(1);
        })


    }, [])




    async function getData(page: number = 1, search: string = "") {
        StaffService.list(page, search).then((staffPaging: Paging<Staff>) => {
            if (staffPaging) {
                console.log("on data affter set state   s")
                setStaff(staffPaging)

            }
        })
    }

    function setForm(staff: Staff) {

        setStaffForm(staff)
        setShowForm(true)
    }

    function staffFormCreate(staff: Staff) {
        StaffService.create(staff).then((res: any) => {
            if (res) {
                getData(staffs.page);
            }
        })
        setShowForm(false);
    }

    function staffDelete(id: string) {
        StaffService.delete(id).then((res: any) => {
            if (res) {
                getData(staffs.page);
            }
        })
    }

    function onSearch(search: any) {
        getData(1, search)
    }



    // acccount
    function setFormAccount(account: Account) {

        setAccountForm(account)
        setShowFormAccount(true)
        // crewate state account
    }

    function FormCreateAccount(accountNew: Account) {
        AccountService.create(accountNew).then((res: any) => {
            if (res) {
                getData(staffs.page);
                setShowForm(false);
            }
        })
    }

    function staffDeleteAccount(id: string) {
        AccountService.delete(id).then((res: any) => {
            if (res) {
                getData(staffs.page);
            }
        })
    }

    return (
        <div>
            <FormNhanVien
                formModal={isShowForm}
                staff={staffForm}
                onStaff={staffFormCreate}
                listPostion={listPostion}
                onCancel={() => setShowForm(false)}
            ></FormNhanVien>


            <FormAccount
                account={acccountForm}
                formModal={isShowFormAccount}
                onSave={FormCreateAccount}
                onCancel={() => setShowFormAccount(false)}
            ></FormAccount>

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
                        staffs={staffs.rows}
                        onStaffs={setForm}
                        onDeleteStaff={staffDelete}
                        onAccount={setFormAccount}
                        search ={onSearch}
                    ></Tables>
                    <Pagination count={staffs.totalPages} onChange={(event, value) => {
                        getData(value);
                    }} color="primary" />
                    <FooterDashboard></FooterDashboard>
                </div>
            </div>
        </div>
    )
}
