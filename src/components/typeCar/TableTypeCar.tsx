// thành phần phản ứng được sử dụng để tạo cảnh báo ngọt ngào
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import AddIcon from "@material-ui/icons/Add";
import { TypeCar } from "../../share/base-ticket/base-carOwner/TypeCar";

import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

type Props = {
	onTypeCar: Function;
	typeCar: TypeCar[];
	onDeleteTypeCar: Function;
	search?(value: string): void;
};
var timeOut: any; 
export default function TableTypeCar(props: Props) {
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
						<h3 className="mb-0">Danh sách loai xe</h3>
					</div>

					<div className="col-6 text-right">
						<button
							onClick={() => {
								props.onTypeCar({});
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
						<a
							href="#"
							className="btn btn-sm btn-primary btn-round btn-icon"
							data-toggle="tooltip"
							data-original-title="Edit product"
						>
							<span className="btn-inner--icon">
								<ImportExportIcon />
							</span>
							<span className="btn-inner--text">Export</span>
						</a>
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
								Tên Loại xe
							</th>
							<th scope="col" className="sort" data-sort="birthday">
								Mô tả
							</th>
							<th scope="col" className="sort" data-sort="action">
								Thao tác
							</th>
						</tr>
					</thead>
					<tbody>
						{props?.typeCar?.map((typeCar: TypeCar) => {
							return (
								<tr>
									<td className="table-user">
										<img
											src="/images/huynhvannam.jpg"
											className="avatar rounded-circle mr-3"
										/>
										<b>{typeCar.nameTypeCar}</b>
									</td>
									<td>
										<span className="text-muted">{typeCar.description}</span>
									</td>

									<td className="table-actions">
										<a
											href="#!"
											className="table-action"
											data-toggle="tooltip"
											data-original-title="Edit product"
										>
											<OverlayTrigger
												placement="top"
												overlay={
													<Tooltip id="button-tooltip-2">
														Sua loai xe
													</Tooltip>
												}
											>
												<EditIcon
													onClick={() => {
														props.onTypeCar(typeCar);
													}}
												/>
											</OverlayTrigger>
										</a>
										<a
											href="#!"
											className="table-action table-action-delete"
											data-toggle="tooltip"
											data-original-title="Delete product"
										>
											<OverlayTrigger
												placement="top"
												overlay={
													<Tooltip id="button-tooltip-2">
														Xoa loai xe
													</Tooltip>
												}
											>
												<DeleteIcon
													onClick={() => {
														if (typeCar && typeCar._id)
															props.onDeleteTypeCar(typeCar._id);
													}}
												/>
											</OverlayTrigger>
										</a>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
			{/*  Card footer */}
			<div className="card-footer py-4">{/* <Pagination  color="primary" /> */}</div>
		</div>
	);
}
