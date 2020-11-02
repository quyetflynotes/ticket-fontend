import React, { Component } from 'react';
import FooterDashboard from '../components/FooterDashboard';
import HeaderDashboard from '../components/HeaderDashboard';
import NavbarDashboard from '../components/NavbarDashboard';
import Sidebar from '../components/Sidebar';
import { PostionStaff as PostionStaffModel } from '../share/base-ticket/base-carOwner/PostionStaff';
import { Paging } from '../share/base-ticket/Paging';
import Pagination from '@material-ui/lab/Pagination';
import FormPostionStaff from '../components/PostionStaff/FormPostionStaff';
import  TablesPostionStaff from '../components/PostionStaff/TablesPostionStaff';
import { PositionStaffCarService } from '../Services/PositionStaffCarService';


var self: PostionStaff;
class PostionStaff extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            staffs: { page: 1, total: 1, totalPages: 1, rows: [], pageSize: 1 },
            showForm: false,
            staffForm: {}
        }
        self = this
    }

    componentDidMount() {
        this.getData(1);
    }

    getData(page: number = 1, search : string = "") {
        PositionStaffCarService.list(page, search).then((staffPaging: Paging<any>) => {
            if (staffPaging) {
                this.setState({
                    staffs: staffPaging
                })
            }
        })
    }

    staffForm(staff: PostionStaffModel) {
        self.setState({
            staffForm: staff,
            showForm: true
        })
    }

    staffFormCreate(staff: PostionStaffModel) {
        PositionStaffCarService.create(staff).then((res: any) => {
            if (res) {
                self.getData(self.state.staffs.page);
                self.setState({
                    showForm: false
                })
            }
        })
        
    }

    staffDelete(id: string) {
        PositionStaffCarService.delete(id).then((res: any) => {
            if (res) {
                self.getData(self.state.staffs.page);
            }
        })
    }
    onCancel(){
        self.setState({
            showForm : false
        });
    }

    onSearch = (search: any)=> {
        this.getData(1, search)
    }
    

    render() {
        return (
            <div>
                <FormPostionStaff
                    formModal={this.state.showForm}
                    postion={this.state.staffForm}
                    onPostion={this.staffFormCreate}
                    onCancel={this.onCancel}
                ></FormPostionStaff>
                <div className="main-content" id="panel">
                    <NavbarDashboard
                        search={this.onSearch}
                    ></NavbarDashboard >
                    <div className="header bg-primary pb-6">
                        <div className="container-fluid">
                            <HeaderDashboard></HeaderDashboard>
                        </div>
                    </div>
                    <div className="container-fluid mt--6">
                        <TablesPostionStaff
                            postion={this.state.staffs.rows}
                            onPostionStaffs={this.staffForm}
                            onDeletePositonStaff={this.staffDelete}
                            search ={this.onSearch}
                        ></TablesPostionStaff>
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
    staffs: Paging<PostionStaffModel>,
    showForm: boolean,
    staffForm: PostionStaffModel
}

export default PostionStaff;