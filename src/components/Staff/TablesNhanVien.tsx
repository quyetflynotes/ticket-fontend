import React from "react";
// thành phần phản ứng được sử dụng để tạo cảnh báo ngọt ngào
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import AddIcon from "@material-ui/icons/Add";
import { Staff } from "../../share/base-ticket/base-carOwner/Staff";
import moment from "moment";
import { Account } from "../../share/base-ticket/base-carOwner/Account";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Tooltip } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";
import { uploadService } from "../../Services/UploadService";

export default function TablesNhanVien(props: Props) {
	const changeAvt = async (e: any, staffItem: Staff) => {
		const image: File = e.target.files[0];
		console.log(image);
		console.log(staffItem._id);

		if (image) {
			const url = await uploadService.upload("images", staffItem._id || "undefined", image);
			console.log(url);
			props.onChangeAvt({ ...staffItem, avt: url });
		}
	};

	return (
		<div className="card">
			{/* Card header */}

			<div className="card-header border-0">
				<div className="row">
					<div className="col-6">
						<h3 className="mb-0">Danh sách nhân viên</h3>
					</div>

					<div className="col-6 text-right">
						<button
							onClick={() => {
								props.onStaffs({});
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
								Ảnh & Tên
							</th>
							<th scope="col" className="sort" data-sort="birthday">
								Ngày sinh
							</th>
							<th scope="col" className="sort" data-sort="address">
								Địa chỉ
							</th>
							<th scope="col" className="sort" data-sort="numberphone">
								Số điện thoại
							</th>
							<th scope="col" className="sort" data-sort="cmnd">
								CMND
							</th>
							<th scope="col" className="sort" data-sort="chucVu">
								Chức vụ
							</th>
							<th scope="col" className="sort" data-sort="action">
								Thao tác
							</th>
						</tr>
					</thead>
					<tbody>
						{props?.staffs?.map((staffItem: Staff) => {
							return (
								<tr>
									<td className="table-user">
										<div style={{ position: "relative" }}>
											<img
												src={staffItem.avt}
												className="avatar rounded-circle mr-3"
											/>{" "}
											<input
												type="file"
												id={`upload-${staffItem._id}`}
												style={{ display: "none" }}
												onChange={(e) => changeAvt(e, staffItem)}
											/>
											<OverlayTrigger
												placement="top"
												overlay={
													<Tooltip id="button-tooltip-2">
														Sua anh dai dien
													</Tooltip>
												}
											>
												<label
													htmlFor={`upload-${staffItem._id}`}
													style={{
														background: "#5e72e4",
														borderRadius: "50%",
														width: "25px",
														height: "25px",
														padding: "0.2rem",
														cursor: "pointer",
														position: "absolute",
														display: "flex",
														alignItems: "center",
														justifyContent: "center",
														left: 30,
														bottom: -15,
													}}
												>
													<EditIcon
														style={{ fontSize: "1rem", color: "#fff" }}
													/>
												</label>
											</OverlayTrigger>
											<b>{staffItem.name}</b>
										</div>
									</td>
									<td>
										<span className="text-muted">
											{moment(staffItem.birthAt).format("DD-MM-YYYY")}
										</span>
									</td>
									<td>
										<span className="text-muted">{staffItem.address}</span>
									</td>
									<td>
										<span className="text-muted">{staffItem.phoneNumer}</span>
									</td>
									<td>
										<span className="text-muted">{staffItem.identityCard}</span>
									</td>
									<td>
										<span className="text-muted">
											{staffItem.position?.name
												? staffItem.position.name
												: "Nhân Viên"}
										</span>
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
														Sua thong tin
													</Tooltip>
												}
											>
												<EditIcon
													onClick={() => {
														props.onStaffs(staffItem);
													}}
												/>
											</OverlayTrigger>
										</a>

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
														Sua tai khoan
													</Tooltip>
												}
											>
												<AccountCircleIcon
													onClick={() => {
														props.onAccount({
															...staffItem.account,
															staffId: staffItem._id,
														});
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
														Xoa nhan vien
													</Tooltip>
												}
											>
												<DeleteIcon
													onClick={() => {
														if (staffItem && staffItem._id)
															props.onDeleteStaff(staffItem._id);
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

type Props = {
	staffs: Staff[];
	onChangeAvt(staff: Staff): void;
	onStaffs: (staff: Staff) => void;
	onDeleteStaff: (id: string) => void;
	onAccount: (account: Account) => void;
};
