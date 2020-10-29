import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import FooterDashboard from '../components/FooterDashboard';
import HeaderDashboard from '../components/HeaderDashboard';
import NavbarDashboard from '../components/NavbarDashboard';
import AddGhe from '../components/ChairCar/AddGhe';
import { useLocation } from 'react-router-dom';
import { ChairCar } from '../share/base-ticket/base-carOwner/ChairCar';
import { ChairCarService } from '../Services/ChairCarService';
import FormChairCar from '../components/ChairCar/FormChairCar';
import AutoChairCar from '../components/ChairCar/AutoChairCar';
import { Console } from 'console';



export default function Ghe() {
    const [listChair, setListChair] = useState<any>([])
    const [chairCarSelected, setChairCarSelected] = useState<ChairCar>({})
    const [showForm, setShowForm] = useState<boolean>(false);
    let getPath = window.location.pathname;
    const idCar = getPath.substring(getPath.lastIndexOf("/") + 1, getPath.length);
    useEffect(() => {
        ChairCarService.getByCarid(idCar).then(res => {
            setListChair(res);
        })
        return () => {
        }
    }, [])
    function onAddRows(floor: number) {
        console.log(floor)
        console.log("on push");
        let getListChair = [...listChair];
        let row = getListChair[getListChair.length - 1].length + 1;
        

        getListChair[floor-1].push([{ localColumn: 1, localRow: row, CarId: idCar, localFloor: floor },
        { localColumn: 2, localRow:row, CarId: idCar, localFloor: floor },
        { localColumn: 3, localRow: row, CarId: idCar, localFloor: floor },
        { localColumn: 4, localRow: row, CarId: idCar, localFloor: floor },
        { localColumn: 5, localRow: row, CarId: idCar, localFloor: floor }])
        console.log(getListChair[getListChair.length-1])
        setListChair(getListChair);
    }

    function onClickEdit(chairCar: ChairCar) {
        setChairCarSelected(chairCar);
        setShowForm(true);
    }
    function onSave(chairCar: ChairCar) {
        console.log("======save=======")
        console.log(chairCar);
        ChairCarService.create(chairCar).then(res => {
            ChairCarService.getByCarid(idCar).then(res => {
                setListChair(res);
            })
        })
        setShowForm(false);
    }
    function autoChairCar(params: any) {
        ChairCarService.autoCreate({ ...params, carId: idCar }).then(res => {
            ChairCarService.getByCarid(idCar).then(res => {
                setListChair(res);
            })
        })
    }
    return (
        <div>
            <AutoChairCar
                onChairCar={autoChairCar}
                formModal={(listChair.length == 0) ? true : false}
            ></AutoChairCar>
            <FormChairCar
                chairCar={chairCarSelected}
                formModal={showForm}
                onCancel={() => { setShowForm(false) }}
                onChairCar={onSave}
            ></FormChairCar>
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
                    <AddGhe listChair={listChair} onAddRows={onAddRows} onClickEdit={onClickEdit}></AddGhe>
                    <FooterDashboard></FooterDashboard>
                </div>
            </div>
        </div>
    )
}


