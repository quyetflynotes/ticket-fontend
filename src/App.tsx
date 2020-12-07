import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
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
import Sidebar from './components/Sidebar';
import FooterDashboard from './components/FooterDashboard';
// import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { fireStoreFirebase } from "./config/FirebaseConfig"
import Excel from './components/Excel/Excel';

function App() {
  const authen: any = useSelector((state: AppModel) => state.authen)

  console.log(authen);
  useEffect(() => {
//     AccountService.getMe().then(res => {
//       (res) ? dispatch.authen.login(res) : dispatch.authen.logout();
//       var getBidProductFirebase = fireStoreFirebase.collection("notification").doc("notification");
//       getBidProductFirebase.onSnapshot({
//         includeMetadataChanges: true
//       }, function (doc: any) {
//         if (doc) {
//           var notification = doc.data();
//           dispatch.NotifinationFirebase.newNotification(notification);
//         }
// 
//       });
//       
//     });
  }, [])

  return (
    <div>
      <div>
        <div>
          <Messenger></Messenger>
        </div>
        <Router>
          <div>
            {(true) ? (
              <div>
                <Sidebar></Sidebar>
                <div className="main-content" id="panel">
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

                    <Route path="/ex">
                      <Excel />
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

                </div>




              </div>
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
