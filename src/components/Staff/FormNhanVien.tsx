import React, { useState, useEffect } from "react";
// thành phần phản ứng được sử dụng để tạo cảnh báo ngọt ngào
import Button from "react-bootstrap/Button";
import FaceIcon from "@material-ui/icons/Face";
import BrandingWatermarkIcon from "@material-ui/icons/BrandingWatermark";
import { Staff } from "../../share/base-ticket/base-carOwner/Staff";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { FormControl, InputLabel, OutlinedInput, TextField } from "@material-ui/core";
import { PostionStaff } from "../../share/base-ticket/base-carOwner/PostionStaff";
import moment from "moment";

type Props = {
	staff: Staff;
	formModal: boolean;
	listPostion: PostionStaff[];
	onStaff: (staff: Staff) => void;
	onCancel: () => void;
};

export default function FormNhanVien(props: Props) {
	const [staff, setStaff] = useState<Staff>({} as Staff);

	const textButtonEdit = props.staff._id ? "Sua nhân viên" : "Them nhân viên";

	useEffect(() => {
		setStaff(props.staff);
	}, [props]);
	return (
		<div>
			<div
				className={
					props.formModal ? "modal fade show show-dialog" : "modal fade hidden-dialog"
				}
				id="modal-form"
				tabIndex={-1}
				role="dialog"
				aria-labelledby="modal-form"
				aria-hidden="true"
				aria-modal="true"
			>
				<div className="modal-dialog modal- modal-dialog-centered modal-sm" role="document">
					<div className="modal-content">
						<div className="modal-body p-0">
							<div className="card bg-secondary border-0 mb-0">
								<div className="card-body px-lg-5 py-lg-5">
									<div className="text-center text-muted mb-4">
										<small>{textButtonEdit}</small>
									</div>
									<form role="form">
										<div className="form-group">
											<div className="input-group input-group-merge input-group-alternative bg-white">
												<FormControl variant="outlined" fullWidth>
													<InputLabel>Tên nhân viên</InputLabel>
													<OutlinedInput
														endAdornment={<FaceIcon />}
														fullWidth
														label="Tên nhân viên"
														value={staff.name || ""}
														onChange={(event) => {
															setStaff({
																...staff,
																name: event.target.value,
															});
														}}
													/>
												</FormControl>
											</div>
										</div>
										<div className="form-group">
											<div className="input-group input-group-merge input-group-alternative bg-white">
												<FormControl variant="outlined" fullWidth>
													<InputLabel>Số điện thoai</InputLabel>
													<OutlinedInput
														endAdornment={<FaceIcon />}
														fullWidth
														label="Số điện thoai"
														value={staff.phoneNumer || ""}
														onChange={(event) => {
															setStaff({
																...staff,
																phoneNumer: event.target.value,
															});
														}}
													/>
												</FormControl>
											</div>
										</div>
										<div className="form-group">
											<div className="input-group input-group-merge input-group-alternative">
												<FormControl variant="outlined" fullWidth>
													<InputLabel>CMND</InputLabel>
													<OutlinedInput
														endAdornment={<BrandingWatermarkIcon />}
														fullWidth
														label="CMND"
														value={staff.identityCard || ""}
														onChange={(event) => {
															setStaff({
																...staff,
																identityCard: event.target.value,
															});
														}}
													/>
												</FormControl>
											</div>
										</div>

										<div className="form-group">
											<div className="input-group input-group-merge input-group-alternative">
												<FormControl variant="outlined" fullWidth>
													<InputLabel>Địa chỉ</InputLabel>
													<OutlinedInput
														endAdornment={<BrandingWatermarkIcon />}
														fullWidth
														label="Địa chỉ"
														value={staff.address || ""}
														onChange={(event) => {
															setStaff({
																...staff,
																address: event.target.value,
															});
														}}
													/>
												</FormControl>
											</div>
										</div>

										<div className="form-group">
											<div className="input-group input-group-merge input-group-alternative">
												<FormControl variant="outlined" fullWidth>
													<TextField
														variant="outlined"
														id="date"
														label="Ngay sinh"
														// format={'DD/MM/YYYY'}
														type="date"
														value={moment(staff.birthAt).format("YYYY-MM-DD")}
														InputLabelProps={{
															shrink: true,
														}}
														onChange={(event) => {
															setStaff({
																...staff,
																birthAt: new Date(
																	event.target.value
																),
															});
														}}
													/>
												</FormControl>
											</div>
										</div>

										<div className="form-group">
											<div className="input-group input-group-merge input-group-alternative">
												{/* <div className="input-group-prepend">
                                                <span className="input-group-text"><RecentActorsIcon /></span>
                                            </div> */}
												<Autocomplete
													options={props.listPostion}
													getOptionLabel={(option: PostionStaff) =>
														option.name || ""
													}
													fullWidth
													onChange={(event: any, newValue: any) => {
														setStaff({
															...staff,
															positionId: newValue?._id || "",
														});
													}}
													renderInput={(params) => (
														<TextField
															{...params}
															onChange={(event) => {
																console.log(event.target);
															}}
															label="Chức vụ"
															variant="outlined"
														/>
													)}
												/>
											</div>
										</div>

										<div className="text-center">
											<Button
												color="success"
												onClick={() => {
													props.onStaff(staff);
												}}
											>
												{textButtonEdit}
											</Button>
											<Button
												color="warning"
												className="btn-warning"
												onClick={() => {
													props.onCancel();
												}}
											>
												Hủy
											</Button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
