import React, { Component } from 'react'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
export default class Paging extends Component {
    render() {
        return (
            <div>
                <div className="card-footer py-4">
                    <nav aria-label="...">
                        <ul className="pagination justify-content-end mb-0">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" tabIndex={-1}>
                                    <KeyboardArrowLeftIcon />
                                    <span className="sr-only">Trước</span>
                                </a>
                            </li>
                            <li className="page-item active">
                                <a className="page-link" href="#">1</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">2</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">3</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">4</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">5 <span className="sr-only">(hiện tại)</span></a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">6</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    <KeyboardArrowRightIcon />
                                    <span className="sr-only">Kế tiếp</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}
