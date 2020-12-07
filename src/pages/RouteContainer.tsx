import React, { Component } from 'react';
import FooterDashboard from '../components/FooterDashboard';
import HeaderDashboard from '../components/HeaderDashboard';
import NavbarDashboard from '../components/NavbarDashboard';
import Sidebar from '../components/Sidebar';
import RouteForm from '../components/Route/RouteForm';
import { StaffService } from '../Services/StaffService';
import { Staff } from '../share/base-ticket/base-carOwner/Staff';
import { Paging } from '../share/base-ticket/Paging';
import Pagination from '@material-ui/lab/Pagination';
import RouteTables from '../components/Route/RouteTables';
import { Customer } from '../share/base-ticket/base-carOwner/Customer';
import { CustomerService } from '../Services/CustomerService';
import { Route } from '../share/base-ticket/base-carOwner/Route';
import { RouteService } from '../Services/RouteService';
import { Car } from '../share/base-ticket/base-carOwner/Car';
import { CarService } from '../Services/CarService';

var self: RouteContainer;
class RouteContainer extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            trips: { page: 1, total: 1, totalPages: 1, rows: [], pageSize: 1 },
            showForm: false,
            tripForm: {},
            cars : { page: 1, total: 1, totalPages: 1, rows: [], pageSize: 1 },
            staff : { page: 1, total: 1, totalPages: 1, rows: [], pageSize: 1 }
        }
        self = this
    }

    componentDidMount() {
        this.getData(1);
    }

    async getData(page: number = 1, search : string = "") {
        let getTrip : Paging<Route> = await RouteService.list(page, search);

        let getCar : Paging<Car> = await CarService.list();
        let getStaff : Paging<Staff> = await StaffService.list();
        self.setState({
            trips: getTrip,
            cars : getCar,
            staff : getStaff
        })
        
    }

    tripForm(trip: Route) {
        self.setState({
            tripForm: trip,
            showForm: true
        })
    }

    tripFormCreate(trip: Route) {
        RouteService.create(trip).then((res: any) => {
            if (res) {
                self.getData(self.state.trips.page);
                self.setState({
                    showForm: false
                })
            }
        })
    }

    tripDelete(id: string) {
        RouteService.delete(id).then((res: any) => {
            if (res) {
                self.getData(self.state.trips.page);
            }
        })
    }
    onCancel(){
        self.setState({
            showForm : false
        })
    }

    onSearch = (search: any)=> {
        this.getData(1, search)
    }

    render() {
        return (
            <div>
                <RouteForm
                    formModal={this.state.showForm}
                    trip={this.state.tripForm}
                    onTrip={this.tripFormCreate}
                    onCancel = {this.onCancel}
                    staff = {this.state?.staff?.rows}
                ></RouteForm>
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
                        <RouteTables
                            trip={this.state.trips?.rows || []}
                            onTrip={this.tripForm}
                            onDeleteTrip={this.tripDelete}
                            search ={this.onSearch}
                        ></RouteTables>
                        <Pagination count={2} onChange={(event, value) => {
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
    trips: Paging<Customer>,
    showForm: boolean,
    tripForm: Customer,
    cars : Paging<Car>,
    staff : Paging<Staff>
}

export default RouteContainer;