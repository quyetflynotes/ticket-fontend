import React, { useState, useEffect } from 'react';
import FooterDashboard from '../components/FooterDashboard';
import HeaderDashboard from '../components/HeaderDashboard';
import NavbarDashboard from '../components/NavbarDashboard';
import Sidebar from '../components/Sidebar';
import TablesCar from '../components/Car/TableCar';
import { StaffService } from '../Services/StaffService';
import { Staff } from '../share/base-ticket/base-carOwner/Staff';
import { Paging } from '../share/base-ticket/Paging';
import Pagination from '@material-ui/lab/Pagination';
import FormCar from '../components/Car/FormCar';
import { CarService } from '../Services/CarService';
import { Car } from '../share/base-ticket/base-carOwner/Car';
import { TypeCar } from '../share/base-ticket/base-carOwner/TypeCar';
import { TypeCarService } from '../Services/TypeCarService';






export default function CarContainer() {
    const [car, setCar] = useState<Paging<Car>>({ page: 1, total: 1, rows: [], pageSize: 1, totalPages: 1 });
    const [showForm, setShowForm] = useState<boolean>(false);
    const [carForm, setCarForm] = useState<Car>({})
    const [typeCar, setTypeCar] = useState<TypeCar[]>([]);

    useEffect(() => {
        getData(1);
        onGetListTypeCar();
        return () => {

        }
    }, [])



    function getData(page: number = 1, search : string = "") {
        CarService.list(page).then((carPaging: Paging<Staff>) => {
            if (carPaging) {
                setCar(carPaging)
            }
        })
    }

    function onGetListTypeCar() {
        TypeCarService.list().then((typeCar: Paging<TypeCar>) => {
            if (typeCar && typeCar.rows) {
                setTypeCar(typeCar.rows)
            }
        })


    }

    function onCarForm(car: Car) {
        setShowForm(true);
        setCarForm(car);
    }

    function onCarFormCreate(carCreate: Car) {
        console.log(carCreate)
        CarService.create(carCreate).then((res: any) => {
            if (res) {
                getData(car.page)
            setShowForm(false)
            }
        })

    }

    function onStaffDelete(id: string) {
        CarService.delete(id).then((res: any) => {
            if (res) {
                getData(car.page);
            }
        })
    }

    function onCancel() {
        setShowForm(false)
    }

    function onSearch(search: any) {
        getData(1, search);
    }

    return (
        <div>
            <FormCar
                formModal={showForm}
                car={carForm}
                onCar={onCarFormCreate}
                typeCar={typeCar}
                onCancel={onCancel}
            ></FormCar>
            <div className="main-content" id="panel">
                <NavbarDashboard
                    search = {()=>{}}
                ></NavbarDashboard >
                <div className="header bg-primary pb-6">
                    <div className="container-fluid">
                        <HeaderDashboard></HeaderDashboard>
                    </div>
                </div>
                <div className="container-fluid mt--6">
                    <TablesCar
                        car={car.rows}
                        onCar={onCarForm}
                        onDeleteCar={onStaffDelete}
                        search ={onSearch}
                    ></TablesCar>
                    <Pagination count={car.totalPages} onChange={(event, value) => {
                        getData(value);
                    }} color="primary" />
                    <FooterDashboard></FooterDashboard>
                </div>
            </div>
        </div>
    )
}