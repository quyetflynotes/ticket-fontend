import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

class FillterVe extends Component {
    render() {
        return (
            <div className="fillterVe mt-4">
                <div className="listFillter">
                    <div>
                        <h2 className="heading-title text-primary mb-0 text-center">BỘ LỌC TÌM KIẾM</h2>
                    </div>
                    <div className="listDanhSach mt-2">
                        <div className="text-tieuDe">
                            Tiêu chí phổ biến
                        </div>
                        <div className="tieuChi mt-2">
                            <div className="custom-control custom-checkbox mb-3">
                                <input className="custom-control-input" id="customCheck1" type="checkbox" />
                                <label className="custom-control-label" htmlFor="customCheck1">Chuyến giảm giá (11)</label>
                            </div>

                            <div className="custom-control custom-checkbox mb-3">
                                <input className="custom-control-input" id="customCheck2" type="checkbox" />
                                <label className="custom-control-label" htmlFor="customCheck2">Xe an toàn Covid-19 (12)</label>
                            </div>

                            <div className="custom-control custom-checkbox mb-3">
                                <input className="custom-control-input" id="customCheck3" type="checkbox" />
                                <label className="custom-control-label" htmlFor="customCheck3">Cho phép xem vị trí xe (100)</label>
                            </div>

                            <div className="custom-control custom-checkbox mb-3">
                                <input className="custom-control-input" id="customCheck4" type="checkbox" />
                                <label className="custom-control-label" htmlFor="customCheck4">Xe  VIP Limousine (1111)</label>
                            </div>
                        </div>
                    </div>

                    <div className="listDanhSach mt-4">
                        <div className="text-tieuDe">
                            Giờ đi
                        </div>
                        <div className="tieuChi mt-2">
                            <Slider
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                            />
                        </div>
                    </div>
                    <div className="listDanhSach">
                        <div className="text-tieuDe">
                            Giá vé
                        </div>
                        <div className="tieuChi mt-2">
                            <Slider
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                            />
                        </div>
                    </div>
                    <div className="listDanhSach">
                        <div className="text-tieuDe">
                            Số chỗ trống
                        </div>
                        <div className="tieuChi mt-2">
                            <Slider
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                            />
                        </div>
                    </div>

                    <div className="listDanhSach mt-4">
                        <div className="text-tieuDe">
                            Loại ghế / giường
                        </div>
                        <div className="tieuChi mt-2">
                            <div className="custom-control custom-checkbox mb-3">
                                <input className="custom-control-input" id="customCheck5" type="checkbox" />
                                <label className="custom-control-label" htmlFor="customCheck5">Ghế ngồi (1200)</label>
                            </div>

                            <div className="custom-control custom-checkbox mb-3">
                                <input className="custom-control-input" id="customCheck6" type="checkbox" />
                                <label className="custom-control-label" htmlFor="customCheck6">Giường nằm (1277)</label>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default FillterVe;