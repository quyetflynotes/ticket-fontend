import React, { Component } from 'react';

class FooterDashboard extends Component {
    render() {
        return (
            <footer className="footer pt-0">
                <div className="row align-items-center justify-content-lg-between">
                    <div className="col-lg-6">
                        <div className="copyright text-center text-lg-left text-muted">
                            &copy; 2020 <a href="https://www.facebook.com/113432427181191" className="font-weight-bold ml-1" target="_blank">TEAM SystemError404 - FPT POLYTECHNIC</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                            <li className="nav-item">
                                <a href="https://www.facebook.com/113432427181191" className="nav-link" target="_blank">TEAM SystemError404 - FPT POLYTECHNIC</a>
                            </li>
                            <li className="nav-item">
                                <a href="https://www.facebook.com/113432427181191" className="nav-link" target="_blank">Về chúng tôi</a>
                            </li>
                            <li className="nav-item">
                                <a href="https://www.facebook.com/113432427181191" className="nav-link" target="_blank">Blog</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterDashboard;