import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="py-5" id="footer-main">
                    <div className="container">
                        <div className="row align-items-center justify-content-xl-between">
                            <div className="col-xl-6">
                                <div className="copyright text-center text-xl-left text-muted">
                                    &copy; 2020 <a href="https://www.facebook.com/113432427181191" className="font-weight-bold ml-1" target="_blank">TEAM SystemError404 - FPT POLYTECHNIC</a>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <ul className="nav nav-footer justify-content-center justify-content-xl-end">
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
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;