
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import StepperVe from '../components/StepperVe';
// ReactDOM.render(<StepperVe/>, document.querySelector('#step'));
class DanhSachVe extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            openDatVe: false
        }
    }

    openStepper = () => {
        this.setState({openDatVe: true });
        console.log(this.state.openDatVe);
    };

    closeStepper = () => {
        this.setState({ openDatVe: true });
        console.log(this.state.openDatVe);
    };

    render() {
        return (
            <div>
                <div className="khungThongTinVe mt-4">
                    <div className="containerKhung">
                        <div className="thongTinChung">
                            <div className="khungAnhXe">
                                <img className="imageXe" src="https://static.vexere.com/production/images/1588992988116.jpeg" alt="race" />
                            </div>
                            <div className="khungThongTinXe">
                                <div className="khungTitleXe">
                                    <div className="bus-info">
                                        <div className="bus-name">
                                            Xe FPT Poly
                                        </div>
                                    </div>
                                    <div className="seat-type">
                                        Giường nằm 38 chỗ
                                    </div>
                                    <div className="from-to">
                                        <svg className="iconTienTrinh" xmlns="http://www.w3.org/2000/svg" width="14" height="74" viewBox="0 0 14 74"><path fill="none" stroke="#787878" stroke-linecap="round" stroke-width="2" stroke-dasharray="0 7" d="M7 13.5v46"></path><g fill="none" stroke="#484848" stroke-width="3"><circle cx="7" cy="7" r="7" stroke="none"></circle><circle cx="7" cy="7" r="5.5"></circle></g><path d="M7 58a5.953 5.953 0 0 0-6 5.891 5.657 5.657 0 0 0 .525 2.4 37.124 37.124 0 0 0 5.222 7.591.338.338 0 0 0 .506 0 37.142 37.142 0 0 0 5.222-7.582A5.655 5.655 0 0 0 13 63.9 5.953 5.953 0 0 0 7 58zm0 8.95a3.092 3.092 0 0 1-3.117-3.06 3.117 3.117 0 0 1 6.234 0A3.092 3.092 0 0 1 7 66.95z" fill="#787878"></path></svg>
                                        <div className="from-to-content">
                                            <div className="content from">
                                                <div className="hour">20:45
                                                </div>
                                                <div className="place">• Bến xe Buôn Mê Thuột
                                                </div>
                                            </div>
                                            <div className="duration">6h30m
                                            </div>
                                            <div className="content to">
                                                <div className="hour">03:15
                                                </div>
                                                <div className="place">• Hồ Chí Minh
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="giaTien">
                                    <div className="fare">
                                        <div className="small">
                                        </div>
                                        <div className="">
                                            230,000 đ
                                        </div>
                                    </div>
                                </div>
                                <div className="khungChoTrong">
                                    <div className="info">
                                        <div className="choTrong">
                                            38 chỗ trống
                                        </div>
                                        <div className="action">
                                            <button  type="button" className="btn btn-success ">Đặt vé</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="full-trip">
                            <span>*</span>
                        Vé chặng thuộc chuyến 16:45 17-10-2020 Yên Bái - Móng Cái
                        </div>
                    </div>

                    <div id="step">

                    </div>

                </div>
                <div className="khungThongTinVe mt-4">
                    <div className="containerKhung">

                    </div>
                </div>
                <div className="khungThongTinVe mt-4">
                    <div className="containerKhung">

                    </div>
                </div>
                <div className="khungThongTinVe mt-4">
                    <div className="containerKhung">

                    </div>
                </div>
            </div>


        );
    }
}

type Props = {

};

type State = {
    openDatVe: boolean
}

export default DanhSachVe;