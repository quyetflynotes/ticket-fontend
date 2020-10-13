import React, { useEffect ,useState } from 'react';
import Sidebar from '../components/Sidebar';
import FooterDashboard from '../components/FooterDashboard';
import HeaderDashboard from '../components/HeaderDashboard';
import NavbarDashboard from '../components/NavbarDashboard';
import AddGhe from '../components/ChairCar/AddGhe';
import { useLocation } from 'react-router-dom';
import { ChairCar } from '../share/base-ticket/base-carOwner/ChairCar';
import { ChairCarService } from '../Services/ChairCarService';
import FormChairCar from '../components/ChairCar/FormChairCar';



export default function Ghe() {
    const [listChair , setListChair] = useState<any>([])
    const [chairCarSelected , setChairCarSelected] = useState<ChairCar>({})
    const [showForm , setShowForm] = useState<boolean>(false);
    const idCar = "5f7e8b727aaa101a1df7ec71";
    useEffect(() => {
        ChairCarService.getByCarid("").then(res=>{
            setListChair(res);
        })
        return () => {
        }
    }, [])
    function onAddRows(){
        console.log("on push");
        let getListChair = [...listChair];

        getListChair.push([{localColumn : 1,localRow :listChair.length+1, CarId : idCar},
             {localColumn : 2,localRow :listChair.length+1, CarId : idCar}, 
             {localColumn : 3, localRow :listChair.length+1 ,CarId : idCar},
              {localColumn : 4, localRow :listChair.length+1, CarId : idCar}, 
              {localColumn : 5 , localRow :listChair.length+1, CarId : idCar}])
        console.log(getListChair);
        setListChair(getListChair);
    }

    function onClickEdit(chairCar : ChairCar){
        setChairCarSelected(chairCar);
        setShowForm(true);
    }
    function onSave(chairCar : ChairCar){
        console.log(chairCar);
        ChairCarService.create(chairCar).then(res=>{
            ChairCarService.getByCarid("").then(res=>{
                setListChair(res);
            })
        })
        setShowForm(false);
    }
    return (
        <div>
            <FormChairCar
                chairCar = {chairCarSelected}
                formModal = {showForm}
                onCancel = {()=>{setShowForm(false)}}
                onChairCar = {onSave}
            ></FormChairCar>
            <Sidebar></Sidebar>
            <div className="main-content" id="panel">
                <NavbarDashboard></NavbarDashboard >
                <div className="header bg-primary pb-6">
                    <div className="container-fluid">
                        <HeaderDashboard></HeaderDashboard>
                    </div>
                </div>
                <div className="container-fluid mt--6">
                    <AddGhe listChair={listChair} onAddRows = {onAddRows} onClickEdit = {onClickEdit}></AddGhe>
                    <FooterDashboard></FooterDashboard>
                </div>
            </div>
        </div>
    )
}


