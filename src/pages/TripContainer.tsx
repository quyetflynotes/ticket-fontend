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
import TripTables from '../components/Route/RouteTables';
import { Customer } from '../share/base-ticket/base-carOwner/Customer';
import { CustomerService } from '../Services/CustomerService';
import { Route } from '../share/base-ticket/base-carOwner/Route';
import { TripService } from '../Services/TripService';
import { Car } from '../share/base-ticket/base-carOwner/Car';
import { CarService } from '../Services/CarService';

var self: TripContainer;
class TripContainer extends Component<Props, State> {
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

    async getData(page: number = 1) {
        let getTrip : Paging<Route> = await TripService.list(page);

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
        TripService.create(trip).then((res: any) => {
            if (res) {
                self.getData(self.state.trips.page);
            }
        })
        self.setState({
            showForm: false
        })
    }

    tripDelete(id: string) {
        TripService.delete(id).then((res: any) => {
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

    render() {
        return (
            <div>
                <RouteForm
                    formModal={this.state.showForm}
                    trip={this.state.tripForm}
                    onTrip={this.tripFormCreate}
                    onCancel = {this.onCancel}
                    cars = {this.state.cars.rows}
                    staff = {this.state.staff.rows}
                ></RouteForm>
                <Sidebar></Sidebar>
                <div className="main-content" id="panel">
                    <NavbarDashboard></NavbarDashboard >
                    <div className="header bg-primary pb-6">
                        <div className="container-fluid">
                            <HeaderDashboard></HeaderDashboard>
                        </div>
                    </div>
                    <div className="container-fluid mt--6">
                        <TripTables
                            trip={this.state.trips.rows}
                            onTrip={this.tripForm}
                            onDeleteTrip={this.tripDelete}
                        ></TripTables>
                        <Pagination count={this.state.trips.totalPages} onChange={(event, value) => {
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

export default TripContainer;