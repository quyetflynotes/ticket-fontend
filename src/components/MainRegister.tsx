import React, { Component } from 'react';
import FaceIcon from '@material-ui/icons/Face';
import EmailIcon from '@material-ui/icons/Email';
import LockOpenIcon from '@material-ui/icons/LockOpen';

class MainRegister extends Component {
    render() {
        return (
            /* Main content */
            <div className="main-content">
                {/* Header */}
                <div className="header bg-gradient-primary py-7 py-lg-8 pt-lg-9">
                    <div className="container">
                        <div className="header-body text-center mb-7">
                            <div className="row justify-content-center">
                                <div className="col-xl-5 col-lg-6 col-md-8 px-5">
                                    <h1 className="text-white">Tạo tài khoản</h1>
                                    <p className="text-lead text-white">Vui lòng nhập đầy đủ thông tin của bạn</p>
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
                {/* Page content */}
                <div className="container mt--8 pb-5">
                    {/* Table */}
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8">
                            <div className="card bg-secondary border-0">
                                <div className="card-header bg-transparent pb-5">
                                    <div className="text-muted text-center mt-2 mb-4"><small>Đăng nhập với</small></div>
                                    <div className="text-center">
                                        <a href="#" className="btn btn-neutral btn-icon mr-4">
                                        <span className="btn-inner--icon"><img src={require("./images/facebook.svg")} alt=""/></span>
                                            <span className="btn-inner--text">Facebook</span>
                                        </a>
                                        <a href="#" className="btn btn-neutral btn-icon">
                                        <span className="btn-inner--icon"><img src={require("./images/google.svg")} alt=""/></span>
                                            <span className="btn-inner--text">Google</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="card-body px-lg-5 py-lg-5">
                                    <div className="text-center text-muted mb-4">
                                        <small>Hoặc đăng ký bằng thông tin xác thực</small>
                                    </div>
                                    <form role="form">
                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><FaceIcon style = {{fontSize: "18px"}}/></span>
                                                </div>
                                                <input className="form-control" placeholder="Tên" type="text" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><EmailIcon style = {{fontSize: "18px"}}/></span>
                                                </div>
                                                <input className="form-control" placeholder="Email" type="email" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><LockOpenIcon style = {{fontSize: "18px"}}/></span>
                                                </div>
                                                <input className="form-control" placeholder="Mật khẩu" type="password" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><LockOpenIcon style = {{fontSize: "18px"}}/></span>
                                                </div>
                                                <input className="form-control" placeholder="Nhập lại mật khẩu" type="password" />
                                            </div>
                                        </div>
                                        <div className="text-muted font-italic"><small>mật khẩu mạnh: <span className="text-success font-weight-700">strong</span></small></div>
                                        <div className="row my-4">
                                            <div className="col-12">
                                                <div className="custom-control custom-control-alternative custom-checkbox">
                                                    <input className="custom-control-input" id="customCheckRegister" type="checkbox" />
                                                    <label className="custom-control-label" htmlFor="customCheckRegister">
                                                        <span className="text-muted">Tôi đồng ý với <a href="#!">Chính sách bảo mật</a></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button type="button" className="btn btn-primary mt-4">Tạo tài khoản</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainRegister;