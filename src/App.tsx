import React from 'react';
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
import Diagram from './components/DiagramsTicket/Diagram';



function App() {
  return (
    <div>
      <Router>
        <div>
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
            <Route path="/dang-ky">
              <Register />
            </Route>
            <Route path="/">
              <LoginQL />
            </Route>
          </Switch>
        </div>
      </Router >
    </div>
  );
}

export default App;
