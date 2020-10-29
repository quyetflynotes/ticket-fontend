import React, { Component } from 'react';
import FooterDashboard from '../components/FooterDashboard';
import HeaderDashboard from '../components/HeaderDashboard';
import NavbarDashboard from '../components/NavbarDashboard';
import Sidebar from '../components/Sidebar';
import TableTypeCar from '../components/typeCar/TableTypeCar';
import { Paging } from '../share/base-ticket/Paging';
import Pagination from '@material-ui/lab/Pagination';
import FormTypeCar from '../components/typeCar/FormTypeCar';
import { TypeCarService } from '../Services/TypeCarService';
import { TypeCar } from '../share/base-ticket/base-carOwner/TypeCar';

class TypeCarContainer extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            typeCars: { page: 1, total: 1, totalPages: 1, rows: [], pageSize: 1 },
            showForm: false,
            typeCarForm: {}
        }
    }

    componentDidMount = () => {
        this.getData(1);
    }

    getData = (page: number = 1, search : string = "") => {
        TypeCarService.list(page, search).then((typeCarPaging: Paging<TypeCar>) => {
            if (typeCarPaging) {
                this.setState({
                    typeCars: typeCarPaging
                })
            }
        })
    }

    typeCarForm = (typeCar: TypeCar) => {
        this.setState({
            typeCarForm: typeCar,
            showForm: true
        })
    }

    typeCarFormCreate = (typeCar: TypeCar) => {
        TypeCarService.create(typeCar).then((res: any) => {
            if (res) {
                this.getData(this.state.typeCars.page);
            }
            if (res) {
                this.setState({
                    showForm: false
                })
            }
        })
    }

    carDelete = (id: string) => {
        TypeCarService.delete(id).then((res: any) => {
            if (res) {
                this.getData(this.state.typeCars.page);
            }
        })
    }
    onCancel = () => {
        this.setState({ showForm: false });
    }

    onSearch = (search: any)=> {
        this.getData(1, search)
    }

    render() {
        return (
            <div>
                <FormTypeCar
                    formModal={this.state.showForm}
                    typeCar={this.state.typeCarForm}
                    onTypeCar={this.typeCarFormCreate}
                    onCancel={this.onCancel}
                ></FormTypeCar>
                <div className="main-content" id="panel">
                    <NavbarDashboard
                        search={() => { }}
                    ></NavbarDashboard >
                    <div className="header bg-primary pb-6">
                        <div className="container-fluid">
                            <HeaderDashboard></HeaderDashboard>
                        </div>
                    </div>
                    <div className="container-fluid mt--6">
                        <TableTypeCar
                            typeCar={this.state.typeCars.rows}
                            onTypeCar={this.typeCarForm}
                            search ={this.onSearch}
                            onDeleteTypeCar={this.carDelete}
                        ></TableTypeCar>
                        <Pagination count={this.state.typeCars.totalPages} onChange={(event, value) => {
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
    typeCars: Paging<TypeCar>,
    showForm: boolean,
    typeCarForm: TypeCar
}

export default TypeCarContainer;