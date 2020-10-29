import React, {useEffect, useState } from 'react';
import EmailIcon from '@material-ui/icons/Email';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { Link } from 'react-router-dom';
import { AccountService } from '../Services/AccountService';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { dispatch } from '../Redux/Store';


type Account = {
    username ?: string;
    password ?: string
}
export default function MainLogin() {
    const history = useHistory();
    const state = useSelector(state => state)
    
    useEffect(()=>{
        
    }, [])
    const [userName , setUserName]  = useState<Account>({});
    function login(){
        AccountService.login(userName).then(res => {
            localStorage.setItem("jwt", res);
            dispatch.authen.login()
            if(res){
                history.push("/dashboard")
            }
        })
    }
    return (
        <div className="main-content">
            <div className="header bg-gradient-primary py-7 py-lg-8 pt-lg-9">
                <div className="container">
                    <div className="header-body text-center mb-7">
                        <div className="row justify-content-center">
                            <div className="col-xl-5 col-lg-6 col-md-8 px-5">
                                <h1 className="text-white">Xin chào!</h1>
                                <p className="text-lead text-white">Vui lòng đăng nhập để sử dụng tính năng nếu chưa có tài khoản vui lòng đăng kí.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="separator separator-bottom separator-skew zindex-100">
                        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <polygon className="fill-default" points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                    </div> */}
            </div>
            {/* <!--  --> */}
            <div className="container mt--8 pb-5">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-7">
                        <div className="card bg-secondary border-0 mb-0">
                            <div className="card-header bg-transparent pb-5">
                                <div className="text-muted text-center mt-2 mb-3"><small>Đăng nhập với</small></div>
                                <div className="btn-wrapper text-center">
                                    <a href="#" className="btn btn-neutral btn-icon">
                                        <span className="btn-inner--icon">
                                            <img src={require("./images/facebook.svg")} alt="" /></span>
                                        <span className="btn-inner--text">Facebook</span>
                                    </a>
                                    <a href="#" className="btn btn-neutral btn-icon">
                                        <span className="btn-inner--icon"><img src={require("./images/google.svg")} alt="" /></span>
                                        <span className="btn-inner--text">Google</span>
                                    </a>
                                </div>
                            </div>
                            <div className="card-body px-lg-5 py-lg-5">
                                <div className="text-center text-muted mb-4">
                                    <small>Hoặc đăng nhập bằng thông tin đăng nhập</small>
                                </div>
                                <form role="form">
                                    <div className="form-group mb-3">
                                        <div className="input-group input-group-merge input-group-alternative">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><EmailIcon style={{ fontSize: "18px" }} /></span>
                                            </div>
                                            <input className="form-control" placeholder="User name"  onChange= {(e)=>{setUserName({...userName,username :e.target.value })}} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group input-group-merge input-group-alternative">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><LockOpenIcon style={{ fontSize: "18px" }} /></span>
                                            </div>
                                            <input className="form-control" placeholder="Mật khẩu" type="password"   onChange= {(e)=>{setUserName({...userName,password :e.target.value })}}/>
                                        </div>
                                    </div>
                                    <div className="custom-control custom-control-alternative custom-checkbox">
                                        <input className="custom-control-input" id="customCheckLogin" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="customCheckLogin">
                                            <span className="text-muted">Ghi nhớ</span>
                                        </label>
                                    </div>
                                    <div className="text-center">
                                        <button type="button" className="btn btn-primary my-4"
                                            onClick={() => {
                                                login()
                                            }}
                                        >Đăng nhập</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-6">
                                <a href="#" className="text-light"><small>Quên mật khẩu?</small></a>
                            </div>
                            <div className="col-6 text-right">
                                <Link className="text-light" to="/dang-ky"><small>Tạo tài khoản mới</small></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

