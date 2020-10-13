import React, { Component } from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import EqualizerIcon from '@material-ui/icons/Equalizer';

class MainProfile extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xl-4 order-xl-2">
                    <div className="card card-profile">
                        <img src="/images/img-1-1000x600.jpg" alt="Image placeholder" className="card-img-top" />
                        <div className="row justify-content-center">
                            <div className="col-lg-3 order-lg-2">
                                <div className="card-profile-image">
                                    <a href="#">
                                        <img src="/images/huynhvannam.jpg" className="rounded-circle" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                            <div className="d-flex justify-content-between">
                                <a href="#" className="btn btn-sm btn-info mr-4">Kết nối</a>
                                <a href="#" className="btn btn-sm btn-default float-right">Nhắn tin</a>
                            </div>
                        </div>
                        <div className="card-body pt-0">
                            <div className="row">
                                <div className="col">
                                    <div className="card-profile-stats d-flex justify-content-center">
                                        <div>
                                            <span className="heading">22</span>
                                            <span className="description">Bạn bè</span>
                                        </div>
                                        <div>
                                            <span className="heading">10</span>
                                            <span className="description">Ảnh</span>
                                        </div>
                                        <div>
                                            <span className="heading">89</span>
                                            <span className="description">Bình luận</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <h5 className="h3">
                                    Huỳnh Văn Nam<span className="font-weight-light">, 22</span>
                                </h5>
                                <div className="h5 font-weight-300">
                                    <LocationOnIcon className="mr-2" />Buôn Mê Thuột
                                </div>
                                <div className="h5 mt-4">
                                    <BusinessCenterIcon className="mr-2" />Quản lý
                                </div>
                                <div>
                                    <CastForEducationIcon className="mr-2"/>CAO ĐẲNG FPT POLYTECHNIC
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Progress track */}
                    <div className="card">
                        {/* Card header */}
                        <div className="card-header">
                            {/* Title */}
                            <h5 className="h3 mb-0">Theo dõi tiến trình</h5>
                        </div>
                        {/* Card body */}
                        <div className="card-body">
                            {/* List group */}
                            <ul className="list-group list-group-flush list my--3">
                                <li className="list-group-item px-0">
                                    <div className="row align-items-center">
                                        <div className="col-auto">
                                            {/* Avatar */}
                                            <a href="#" className="avatar rounded-circle">
                                                <img alt="Image placeholder" src="/images/huynhvannam.jpg" />
                                            </a>
                                        </div>
                                        <div className="col">
                                            <h5>Ngày 1: Đi Làm 8h</h5>
                                            <div className="progress progress-xs mb-0">
                                                <div className="progress-bar bg-orange" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: "60%" }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item px-0">
                                    <div className="row align-items-center">
                                        <div className="col-auto">
                                            {/* Avatar */}
                                            <a href="#" className="avatar rounded-circle">
                                                <img alt="Image placeholder" src="/images/huynhvannam.jpg" />
                                            </a>
                                        </div>
                                        <div className="col">
                                            <h5>Ngày 1: Đi Làm 8h</h5>
                                            <div className="progress progress-xs mb-0">
                                                <div className="progress-bar bg-green" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{ width: "100%" }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item px-0">
                                    <div className="row align-items-center">
                                        <div className="col-auto">
                                            {/* Avatar */}
                                            <a href="#" className="avatar rounded-circle">
                                                <img alt="Image placeholder" src="/images/huynhvannam.jpg" />
                                            </a>
                                        </div>
                                        <div className="col">
                                            <h5>Ngày 1: Đi Làm 8h</h5>
                                            <div className="progress progress-xs mb-0">
                                                <div className="progress-bar bg-red" role="progressbar" aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} style={{ width: "72%" }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item px-0">
                                    <div className="row align-items-center">
                                        <div className="col-auto">
                                            {/* Avatar */}
                                            <a href="#" className="avatar rounded-circle">
                                                <img alt="Image placeholder" src="/images/huynhvannam.jpg" />
                                            </a>
                                        </div>
                                        <div className="col">
                                            <h5>Ngày 1: Đi Làm 8h</h5>
                                            <div className="progress progress-xs mb-0">
                                                <div className="progress-bar bg-teal" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{ width: "90%" }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item px-0">
                                    <div className="row align-items-center">
                                        <div className="col-auto">
                                            {/* Avatar */}
                                            <a href="#" className="avatar rounded-circle">
                                                <img alt="Image placeholder" src="/images/huynhvannam.jpg" />
                                            </a>
                                        </div>
                                        <div className="col">
                                            <h5>Ngày 1: Đi Làm 8h</h5>
                                            <div className="progress progress-xs mb-0">
                                                <div className="progress-bar bg-green" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{ width: "100%" }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-8 order-xl-1">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card bg-gradient-info border-0">
                                {/* Card body */}
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <h5 className="card-title text-uppercase text-muted mb-0 text-white">Tổng lượt truy cập</h5>
                                            <span className="h2 font-weight-bold mb-0 text-white">350,897</span>
                                        </div>
                                        <div className="col-auto">
                                            <div className="icon icon-shape bg-white text-dark rounded-circle shadow">
                                                <ThumbUpIcon/>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mt-3 mb-0 text-sm">
                                        <span className="text-white mr-2"><i className="fa fa-arrow-up"></i> 3.48%</span>
                                        <span className="text-nowrap text-light">Kể từ tháng trước</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card bg-gradient-danger border-0">
                                {/* Card body */}
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <h5 className="card-title text-uppercase text-muted mb-0 text-white">Hiệu suất</h5>
                                            <span className="h2 font-weight-bold mb-0 text-white">49,65%</span>
                                        </div>
                                        <div className="col-auto">
                                            <div className="icon icon-shape bg-white text-dark rounded-circle shadow">
                                                <EqualizerIcon/>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mt-3 mb-0 text-sm">
                                        <span className="text-white mr-2"><i className="fa fa-arrow-up"></i> 3.48%</span>
                                        <span className="text-nowrap text-light">Kể từ tháng trước</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <div className="row align-items-center">
                                <div className="col-8">
                                    <h3 className="mb-0">Chỉnh sửa hồ sơ</h3>
                                </div>
                                <div className="col-4 text-right">
                                    <a href="#!" className="btn btn-sm btn-primary">Chỉnh sửa</a>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <form>
                                <h6 className="heading-small text-muted mb-4">Thông tin người dùng</h6>
                                <div className="pl-lg-4">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="form-control-label" htmlFor="input-username">Tài khoản</label>
                                                <input type="text" id="input-username" className="form-control" placeholder="Tài khoản"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="form-control-label" htmlFor="input-email">Địa chỉ email</label>
                                                <input type="email" id="input-email" className="form-control" placeholder="email@example.com" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="form-control-label" htmlFor="input-first-name">Họ và tên</label>
                                                <input type="text" id="input-first-name" className="form-control" placeholder="Họ và tên"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="form-control-label" htmlFor="input-first-name">Mật khẩu</label>
                                                <input type="text" id="input-first-name" className="form-control" placeholder="Mật khẩu"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="my-4" />
                                {/* Address */}
                                <h6 className="heading-small text-muted mb-4">THÔNG TIN LIÊN LẠC</h6>
                                <div className="pl-lg-4">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label className="form-control-label" htmlFor="input-address">Địa chỉ</label>
                                                <input id="input-address" className="form-control" placeholder="Địa chỉ nhà" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label className="form-control-label" htmlFor="input-city">Thành phố</label>
                                                <input type="text" id="input-city" className="form-control" placeholder="Thành phố"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label className="form-control-label" htmlFor="input-country">Quốc gia</label>
                                                <input type="text" id="input-country" className="form-control" placeholder="Quốc gia"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="my-4" />
                                {/* Description */}
                                <h6 className="heading-small text-muted mb-4">Về tôi</h6>
                                <div className="pl-lg-4">
                                    <div className="form-group">
                                        <label className="form-control-label">Về tôi</label>
                                        <textarea rows={4} className="form-control" placeholder="Vài lời về bạn...">Hiện tại mình là sinh viên FPT POLYTECHNIC</textarea>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainProfile;