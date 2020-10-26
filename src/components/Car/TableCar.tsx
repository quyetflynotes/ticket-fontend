/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// thành phần phản ứng được sử dụng để tạo cảnh báo ngọt ngào
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import AddIcon from "@material-ui/icons/Add";
import { Car } from "../../share/base-ticket/base-carOwner/Car";
import { useHistory } from "react-router-dom";
import EventSeatIcon from "@material-ui/icons/EventSeat";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import moment from "moment";
import { OverlayTrigger } from "react-bootstrap";
import { Tooltip } from "react-bootstrap";


type Props = {
	car: Car[];
	onCar: (car: Car) => void;
	onDeleteCar: (id: string) => void;
};

export default function TableCar(props: Props) {
	const history = useHistory();
	return (
		<div className="card">
			{/* Card header */}

			<div className="card-header border-0">
				<div className="row">
					<div className="col-6">
						<h3 className="mb-0">Danh sách xe</h3>
					</div>

					<div className="col-6 text-right">
						<button
							onClick={() => {
								props.onCar({});
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
								Tên xe
							</th>
							<th scope="col" className="sort" data-sort="birthday">
								Loại xe
							</th>
							<th scope="col" className="sort" data-sort="address">
								Biển số xe
							</th>
							<th scope="col" className="sort" data-sort="numberphone">
								Ngày nhập{" "}
							</th>
							<th scope="col" className="sort" data-sort="cmnd">
								Xuất xứ
							</th>
							<th scope="col" className="sort" data-sort="chucVu">
								Trạng thái
							</th>
							<th scope="col" className="sort" data-sort="action">
								Thao tác
							</th>
						</tr>
					</thead>
					<tbody>
						{props?.car?.map((carItem: Car) => {
							return (
								<tr>
									<td className="table-user">
										<img
											src="/images/huynhvannam.jpg"
											className="avatar rounded-circle mr-3"
										/>
										<b>{carItem.name}</b>
									</td>
									<td>
										<span className="text-muted">
											{carItem?.TypeCar?.nameTypeCar}
										</span>
									</td>
									<td>
										<span className="text-muted">{carItem.licensePlates}</span>
									</td>
									<td>
										<span className="text-muted">
											{moment(carItem.entryAt).format("DD-MM-YYYY")}
										</span>
									</td>
									<td>
										<span className="text-muted">{carItem.origin}</span>
									</td>
									<td>
										<span className="text-muted">{carItem.statusCar}</span>
									</td>
									<td className="table-actions">
										<OverlayTrigger
											placement="right"
											delay={{ show: 250, hide: 400 }}
											overlay={<Tooltip id="button-tooltip-2">Check out this avatar</Tooltip>}
										>
                                            <EventSeatIcon
												onClick={() => {
													history.push(`/quan-ly-ghe/${carItem._id}`);
												}}
											/>
                                        </OverlayTrigger>
										<a
											type="button"
											className="table-action"
											data-toggle="tooltip"
											data-placement="top"
											title="Tooltip on top"
											data-original-title="Edit product"
										>
											
										</a>

										<a
											className="table-action"
											data-toggle="tooltip"
											data-original-title="Edit product"
										>
											<LocationOnIcon
												onClick={() => {
													history.push(
														`/quan-ly-chuyen-di/${carItem._id}`
													);
												}}
											/>
										</a>
										<a
											className="table-action"
											data-toggle="tooltip"
											data-original-title="Edit product"
										>
											<EditIcon
												onClick={() => {
													props.onCar(carItem);
												}}
											/>
										</a>
										<a
											className="table-action table-action-delete"
											data-toggle="tooltip"
											data-original-title="Delete product"
										>
											<DeleteIcon
												onClick={() => {
													if (carItem && carItem._id)
														props.onDeleteCar(carItem._id);
												}}
											/>
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
