import React, { Component } from 'react';
import FooterDashboard from '../components/FooterDashboard';
import HeaderDashboard from '../components/HeaderDashboard';
import NavbarDashboard from '../components/NavbarDashboard';
import Sidebar from '../components/Sidebar';
import FormCustomer from '../components/customer/FormCustomer';
import { StaffService } from '../Services/StaffService';
import { Staff } from '../share/base-ticket/base-carOwner/Staff';
import { Paging } from '../share/base-ticket/Paging';
import Pagination from '@material-ui/lab/Pagination';
import TablesCustomer from '../components/customer/TablesCustomer';
import { Customer } from '../share/base-ticket/base-carOwner/Customer';
import { CustomerService } from '../Services/CustomerService';

var self: CustomerContainer;
class CustomerContainer extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            customer: { page: 1, total: 1, totalPages: 1, rows: [], pageSize: 1 },
            showForm: false,
            customerForm: {}
        }
        self = this
    }

    componentDidMount() {
        this.getData(1);
    }

    getData(page: number = 1) {
        CustomerService.list(page).then((customerPaging : Paging<Customer>) => {
            if (customerPaging) {
                this.setState({
                    customer: customerPaging
                })
            }
        })
    }

    customerForm(customer: Customer) {
        self.setState({
            customerForm: customer,
            showForm: true
        })
    }

    customerFormCreate(customer: Customer) {
        CustomerService.create(customer).then((res: any) => {
            if (res) {
                self.getData(self.state.customer.page);
            }
        })
        self.setState({
            showForm: false
        })
    }

    customerDelete(id: string) {
        CustomerService.delete(id).then((res: any) => {
            if (res) {
                self.getData(self.state.customer.page);
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
                <FormCustomer
                    formModal={this.state.showForm}
                    customer={this.state.customerForm}
                    onCustomer={this.customerFormCreate}
                    onCancel = {this.onCancel}
                ></FormCustomer>
                <Sidebar></Sidebar>
                <div className="main-content" id="panel">
                    <NavbarDashboard></NavbarDashboard >
                    <div className="header bg-primary pb-6">
                        <div className="container-fluid">
                            <HeaderDashboard></HeaderDashboard>
                        </div>
                    </div>
                    <div className="container-fluid mt--6">
                        <TablesCustomer
                            customer={this.state.customer.rows}
                            onCustomer={this.customerForm}
                            onDeleteCustomer={this.customerDelete}
                        ></TablesCustomer>
                        <Pagination count={this.state.customer.totalPages} onChange={(event, value) => {
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
    customer: Paging<Customer>,
    showForm: boolean,
    customerForm: Customer
}

export default CustomerContainer;