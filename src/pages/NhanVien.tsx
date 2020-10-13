import React, { Component } from 'react';
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

var self: NhanVien;
class NhanVien extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            staffs: { page: 1, total: 1, totalPages: 1, rows: [], pageSize: 1 },
            showForm: false,
            staffForm: {},
            listPostion : []
        }
        self = this
    }

    componentDidMount() {
        this.getData(1);
        PositionStaffCarService.list().then((res : Paging<PostionStaff>)=>{
            this.setState({
                listPostion : res.rows
            })
        })
    }

     getData(page: number = 1) {
        StaffService.list(page).then((staffPaging: Paging<Staff>) => {
            if (staffPaging) {
                this.setState({
                    staffs: staffPaging
                })
            }
        })
    }

    staffForm(staff: Staff) {
        self.setState({
            staffForm: staff,
            showForm: true
        })
    }

    staffFormCreate(staff: Staff) {
        StaffService.create(staff).then((res: any) => {
            if (res) {
                self.getData(self.state.staffs.page);
            }
        })
        self.setState({
            showForm: false
        })
    }

    staffDelete(id: string) {
        StaffService.delete(id).then((res: any) => {
            if (res) {
                self.getData(self.state.staffs.page);
            }
        })
    }

    onCancel(){
        self.setState({
            showForm :false 
        })
    }

    render() {
        return (
            <div>
                <FormNhanVien
                    formModal={this.state.showForm}
                    staff={this.state.staffForm}
                    onStaff={this.staffFormCreate}
                    listPostion = {this.state.listPostion}
                    onCancel = {this.onCancel}
                ></FormNhanVien>
                <Sidebar></Sidebar>
                <div className="main-content" id="panel">
                    <NavbarDashboard></NavbarDashboard >
                    <div className="header bg-primary pb-6">
                        <div className="container-fluid">
                            <HeaderDashboard></HeaderDashboard>
                        </div>
                    </div>
                    <div className="container-fluid mt--6">
                        <Tables
                            staffs={this.state.staffs.rows}
                            onStaffs={this.staffForm}
                            onDeleteStaff={this.staffDelete}
                        ></Tables>
                        <Pagination count={this.state.staffs.totalPages} onChange={(event, value) => {
                            this.getData(value);
                        }} color="primary" />
                        <FooterDashboard></FooterDashboard>
                    </div>
                </div>
            </div>
        );
    }
}

type Props = {

}

type State = {
    staffs: Paging<Staff>,
    showForm: boolean,
    staffForm: Staff,
    listPostion : PostionStaff[]
}

export default NhanVien;