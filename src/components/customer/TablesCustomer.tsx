/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// thành phần phản ứng được sử dụng để tạo cảnh báo ngọt ngào
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import AddIcon from '@material-ui/icons/Add';
import { Customer } from '../../share/base-ticket/base-carOwner/Customer';
import moment from 'moment';

type Props = {
    customer: Customer[],
    onCustomer: (customer: Customer) => void,
    onDeleteCustomer: (id: string) => void,
    search?(value: string): void;
};


var timeOut : any

export default function TablesCustomer(props: Props) {
    function onSearch(valueSearch: string) {

        clearInterval(timeOut);
        timeOut = setInterval(() => {
			if (props.search) {
				props.search(valueSearch);
			}
            clearInterval(timeOut);
        }, 500)

    }
    return (
        <div className="card">
            {/* Card header */}

            <div className="card-header border-0">
                <div className="row">
                    <div className="col-6">
                        <h3 className="mb-0">Danh sách khach hang</h3>
                    </div>

                    <div className="col-6 text-right">
                        <button onClick={() => {
                            props.onCustomer({});
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
                                <input className="form-control form-control-default" type="search" placeholder="Tìm kiếm" id="example-search-input"
                                    onChange ={(e)=> onSearch(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Light table */}
            <div className="table-responsive">
                <table className="table align-items-center table-flush table-hover">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col" className="sort" data-sort="name">Ảnh & Tên</th>
                            <th scope="col" className="sort" data-sort="cmnd">CMND</th>
                            <th scope="col" className="sort" data-sort="numberphone">Số điện thoại</th>
                            <th scope="col" className="sort" data-sort="address">Ngày sinh</th>
                            <th scope="col" className="sort" data-sort="email">Email</th>
                            <th scope="col" className="sort" data-sort="gender">Gioi tinh</th>
                            <th scope="col" className="sort" data-sort="action">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props?.customer?.map((customerItem: Customer) => {
                                return (
                                    <tr>

                                        <td className="table-user">
                                            <img src="/images/huynhvannam.jpg" className="avatar rounded-circle mr-3" />
                                            <b>{customerItem.name}</b>
                                        </td>
                                        <td>
                                            <span className="text-muted">{customerItem.CMND}</span>
                                        </td>
                                        <td>
                                            <span className="text-muted">{customerItem.phoneNumber}</span>
                                        </td>
                                        <td>
                                            <span className="text-muted">{moment(customerItem.BirthAt).format("DD-MM-YYYY") }</span>
                                        </td>
                                        <td>
                                            <span className="text-muted">{customerItem.email}</span>
                                        </td>

                                        <td>
                                            <span className="text-muted">{customerItem.sex}</span>
                                        </td>

                                        <td className="table-actions">
                                            <a href="#!" className="table-action" data-toggle="tooltip" data-original-title="Edit product">
                                                <EditIcon
                                                    onClick={() => {
                                                        props.onCustomer(customerItem)
                                                    }}
                                                />
                                            </a>
                                            <a href="#!" className="table-action table-action-delete" data-toggle="tooltip" data-original-title="Delete product">
                                                <DeleteIcon
                                                    onClick={() => {
                                                        if (customerItem && customerItem._id) props.onDeleteCustomer(customerItem._id)
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





