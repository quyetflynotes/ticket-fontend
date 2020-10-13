import React, { Component } from 'react';
// thành phần phản ứng được sử dụng để tạo cảnh báo ngọt ngào
import ReactBSAlert from "react-bootstrap-sweetalert";
import Button from 'react-bootstrap/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ImageIcon from '@material-ui/icons/Image';
import FaceIcon from '@material-ui/icons/Face';
import PhoneIcon from '@material-ui/icons/Phone';
import BrandingWatermarkIcon from '@material-ui/icons/BrandingWatermark';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import AddIcon from '@material-ui/icons/Add';
import { Staff } from "../../share/base-ticket/base-carOwner/Staff";
import FormNhanVien from './FormPostionStaff';
import { PostionStaff } from '../../share/base-ticket/base-carOwner/PostionStaff';

type Props = {
    postion: PostionStaff[],
    onPostionStaffs: (postion: PostionStaff) => void,
    onDeletePositonStaff: (id: string) => void
};

export default function TablesPostionStaff(props : Props) {
    return (
        <div className="card">
            {/* Card header */}

            <div className="card-header border-0">
                <div className="row">
                    <div className="col-6">
                        <h3 className="mb-0">Danh sách nhân viên</h3>
                    </div>

                    <div className="col-6 text-right">
                        <button onClick={() => {
                            props.onPostionStaffs({});
                        }}
                            className="btn btn-sm btn-primary btn-round btn-icon"
                            data-toggle="tooltip"
                            data-original-title="Edit product" >
                            <span className="btn-inner--icon"><AddIcon /></span>
                            <span className="btn-inner--text">Thêm</span>
                        </button>
                        <a href="#" className="btn btn-sm btn-primary btn-round btn-icon" data-toggle="tooltip" data-original-title="Edit product">
                            <span className="btn-inner--icon"><ImportExportIcon /></span>
                            <span className="btn-inner--text">Export</span>
                        </a>
                        <div className="form-group row float-right">
                            <div className="col-md-auto">
                                <input className="form-control form-control-default" type="search" placeholder="Tìm kiếm" id="example-search-input" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Light table */}
            <div className="table-responsive">
                <table className="table align-items-center table-flush table-striped">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col" className="sort" data-sort="name">Tên Chức vụ</th>
                            <th scope="col" className="sort" data-sort="birthday">Mô tả</th>
                            <th scope="col" className="sort" data-sort="birthday">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props?.postion?.map((postionItem: PostionStaff) => {
                                return (
                                    <tr>

                                        <td className="table-user">
                                            <b>{postionItem.name}</b>
                                        </td>
                                        <td>
                                            <span className="text-muted">{postionItem.description}</span>
                                        </td>

                                        <td className="table-actions">
                                            <a href="#!" className="table-action" data-toggle="tooltip" data-original-title="Edit product">
                                                <EditIcon
                                                    onClick={() => {
                                                        props.onPostionStaffs(postionItem)
                                                    }}
                                                />
                                            </a>
                                            <a href="#!" className="table-action table-action-delete" data-toggle="tooltip" data-original-title="Delete product">
                                                <DeleteIcon
                                                    onClick={() => {
                                                        if (postionItem && postionItem._id) props.onDeletePositonStaff(postionItem._id)
                                                    }}
                                                />
                                            </a>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            {/*  Card footer */}
            <div className="card-footer py-4">


                {/* <Pagination  color="primary" /> */}
            </div>

        </div>
    )
}





