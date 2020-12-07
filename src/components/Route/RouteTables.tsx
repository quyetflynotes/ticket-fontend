// thành phần phản ứng được sử dụng để tạo cảnh báo ngọt ngào
import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import ImportExportIcon from "@material-ui/icons/ImportExport";

import AddIcon from "@material-ui/icons/Add";

import { Route } from "../../share/base-ticket/base-carOwner/Route";
import { HelpTime } from "../../Helpers/HelpTime";
import moment from "moment";

type Props = {
	onTrip: Function;
	trip: Route[];
	onDeleteTrip: Function;
	search?(value: string): void;
};
var timeOut: any;
export default function RouteTables(props: Props) {
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
						<h3 className="mb-0">Danh sách lo trinh</h3>
					</div>

					<div className="col-6 text-right">
						<button
							onClick={() => {
								props.onTrip({});
							}}
							className="btn btn-sm btn-primary btn-round btn-icon"
							data-toggle="tooltip"
							data-original-title="Edit product"
						>
							<span className="btn-inner--icon">
								<AddIcon />
							</span>
							<span className="btn-inner--text">Thêm</span>
						</button>
						{/* <a
							href="#"
							className="btn btn-sm btn-primary btn-round btn-icon"
							data-toggle="tooltip"
							data-original-title="Edit product"
						>
							<span className="btn-inner--icon">
								<ImportExportIcon />
							</span>
							<span className="btn-inner--text">Export</span>
						</a> */}
						<div className="form-group row float-right">
							<div className="col-md-auto">
								<input
									className="form-control form-control-default"
									type="search"
									placeholder="Tìm kiếm"
									id="example-search-input"
									onChange = {(e)=> onSearch(e.target.value)}
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
							<th scope="col" className="sort" data-sort="name">
								Địa điểm bắt đầu
							</th>
							<th scope="col" className="sort" data-sort="birthday">
								Địa điểm kết thúc
							</th>
							<th scope="col" className="sort" data-sort="address">
								GIờ bắt đầu{" "}
							</th>
							<th scope="col" className="sort" data-sort="numberphone">
								Tổng thời gian chạy dự kiến
							</th>
							<th scope="col" className="sort" data-sort="action">
								Thao tác
							</th>
						</tr>
					</thead>
					<tbody>
						
					</tbody>
				</table>
			</div>
			{/*  Card footer */}
			<div className="card-footer py-4">{/* <Pagination  color="primary" /> */}</div>
		</div>
	);
}
