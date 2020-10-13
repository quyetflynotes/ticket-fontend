import { Input, Radio } from '@material-ui/core';
import React, { Component } from 'react';
import RoomIcon from '@material-ui/icons/Room';

class DiemDonTra extends Component {
    render() {
        return (
            <div className="khungDiemDonTra">
                <div className="khungDiem">
                    <div className="diemDon">
                        <div className="label">
                            Điểm đón
                        </div>
                        <div className="groupsItem ">
                            <Radio value=""></Radio>
                            <span className="timeAndDiaDiem">
                                <span style={{ fontWeight: 700, color: "var(--primary)" }}>21:45</span>
                                <span className="diaDiem">
                                    <span>•</span>
                                &nbsp;Bến xe Mỹ Đình
                            </span>
                            </span>
                        </div>
                        <div className="diaChiRo">
                            <RoomIcon />
                            <span style={{ color: "rgb(72, 72, 72)" }}>20 Phạm Hùng</span>
                        </div>
                    </div>
                    <span className="colum"></span>
                    <div className="diemDon">
                        <div className="label">
                            Điểm trả
                        </div>
                        <div className="groupsItem ">
                            <Radio value=""></Radio>
                            <span className="timeAndDiaDiem">
                                <span style={{ fontWeight: 700, color: "var(--primary)" }}>21:45</span>
                                <span className="diaDiem">
                                    <span>•</span>
                                &nbsp;Bến xe Buôn Mê Thuột
                            </span>
                            </span>
                        </div>
                        <div className="diaChiRo">
                            <RoomIcon />
                            <span style={{ color: "rgb(72, 72, 72)" }}>01 Phan Huy Chú</span>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default DiemDonTra;