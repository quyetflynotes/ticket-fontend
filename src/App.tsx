import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import LoginQL from './pages/LoginQL';
import NhanVien from './pages/NhanVien';
import PostionStaff from './pages/PostionStaff';
import CarContainer from './pages/CarContainer';
import TypeCarContainer from './pages/TypeCarContainer';
import CustomerContainer from './pages/CustomerContainer';
import RouteContainer from './pages/RouteContainer';
import TripContainer from './pages/TripContainer';
import CalcMoney from './pages/CalcMoney';
import TestFormMilk from './components/TestFormMilk';
import StyleDemo from './pages/StyleDemo';
import Ghe from './pages/Ghe';
import SettingsNhanVien from './pages/SettingsNhanVien';
import Ve from './pages/TripHomeContainer';
import Messenger from './pages/Messenger';
import { dispatch } from "./Redux/Store"
import Diagram from './components/DiagramsTicket/Diagram';
import DateFnsUtils from '@date-io/date-fns';
import { AccountService } from './Services/AccountService';
import { useSelector } from 'react-redux';
import { AppModel } from './Redux';
// import { MuiPickersUtilsProvider } from '@material-ui/pickers';

function App() {
  const isAuthent:any = useSelector((state: AppModel )=> state.authen)

  useEffect(() => {
    let getMe = AccountService.getMe().then(res => {
      (res)? dispatch.authen.login() :dispatch.authen.logout() 
    });
  }, [])

  return(
      <div>
        <div>
          <div>
            <Messenger></Messenger>
          </div>
          <Router>
            <div>
            {(isAuthent.isAuthenticated) ? (
              <Switch>
              <Route path="/formilk">
                <StyleDemo />
              </Route>

              <Route path="/quan-ly-nhan-vien">
                <NhanVien />
              </Route>

              <Route path="/quan-ly-chuc-vu">
                <PostionStaff />
              </Route>

              <Route path="/quan-ly-xe">
                <CarContainer />
              </Route>

              <Route path="/quan-ly-loai-xe">
                <TypeCarContainer />
              </Route>

              <Route path="/quan-ly-khach-hang">
                <CustomerContainer />
              </Route>

              <Route path="/quan-ly-lo-trinh">
                <RouteContainer />
              </Route>

              <Route path="/quan-ly-ghe/:id">
                <Ghe />
              </Route>

              <Route path="/quan-ly-chuyen-di/:id">
                <TripContainer />
              </Route>

              <Route path="/quan-ly-ve">
                <Ve />
              </Route>

              <Route path="/saleTicket/:id">
                <Diagram />
              </Route>

              <Route path="/setting-nhan-vien">
                <SettingsNhanVien />
              </Route>

              <Route path="/dashboard">
                <Dashboard />
              </Route>

              <Route path="*">
                <Dashboard />
              </Route>
              <Route path="/dang-ky">
                <Register />
              </Route>
              <Route path="/">
                <LoginQL />
              </Route>
            </Switch>
            ) : 
              (<Switch><Route path="/">
              <LoginQL />
            </Route></Switch>)
              
              }
            </div>
          </Router >
        </div>
      </div>
    ) 
}

export default App;
