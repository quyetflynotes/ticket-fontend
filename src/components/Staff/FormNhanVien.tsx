import React, { useState, useEffect } from "react";
// thành phần phản ứng được sử dụng để tạo cảnh báo ngọt ngào
import Button from "react-bootstrap/Button";
import FaceIcon from "@material-ui/icons/Face";
import BrandingWatermarkIcon from "@material-ui/icons/BrandingWatermark";
import { Staff } from "../../share/base-ticket/base-carOwner/Staff";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {
	FormControl,
	FormHelperText,
	InputLabel,
	OutlinedInput,
	TextField,
} from "@material-ui/core";
import { PostionStaff } from "../../share/base-ticket/base-carOwner/PostionStaff";
import moment from "moment";
import { storage } from "../../config/FirebaseConfig";
import { uploadService } from "../../Services/UploadService";
import { useFormik } from "formik";

type Props = {
	staff: Staff;
	formModal: boolean;
	listPostion: PostionStaff[];
	onStaff: (staff: Staff) => void;
	onCancel: () => void;
};

const validate = (staff: Staff) => {
	const errors: Staff = {};
	if (!staff.name) {
		errors.name = "Required";
	}
	// 	else if (values.firstName.length > 15) {
	// 		errors.firstName = "Must be 15 characters or less";
	// 	}
	//
	// 	if (!values.lastName) {
	// 		errors.lastName = "Required";
	// 	} else if (values.lastName.length > 20) {
	// 		errors.lastName = "Must be 20 characters or less";
	// 	}
	//
	// 	if (!values.email) {
	// 		errors.email = "Required";
	// 	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
	// 		errors.email = "Invalid email address";
	// 	}

	return errors;
};

export default function FormNhanVien(props: Props) {
	const [staff, setStaff] = useState<Staff>({} as Staff);
	// console.log(props.staff);

	// setStaff({...props.staff})

	const textButtonEdit = props.staff._id ? "Sua nhân viên" : "Them nhân viên";

	const formik = useFormik({
		initialValues: {
			
		},
		validate,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	useEffect(() => {
		// console.log(props.staff);
		// console.log(props.staff);
		// gais trij truyen vao la trong;
		setStaff(props.staff);
		console.log(props.staff.name)
		if(props.staff.name){
			formik.setValues({...props.staff,name : props.staff.name});
		}else {
			formik.setValues({...props.staff,name : ""});
		}
		
		
	}, [props, props.staff]);
	console.log(formik.values)
	return (
		
		<form onSubmit={formik.handleSubmit}>
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
				{console.log(formik.values.name)}
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
											{/* <div className="input-group input-group-merge input-group-alternative bg-white"> */}
											<FormControl variant="outlined" fullWidth>
												<InputLabel>Tên nhân viên</InputLabel>
												<OutlinedInput
													error={
														formik.touched.name && formik.errors.name
															? true
															: false
													}
													endAdornment={<FaceIcon />}
													fullWidth
													label="Tên nhân viên"
													value={formik.values.name}
													onChange={formik.handleChange}
												/>
												<FormHelperText>
													{formik.touched.name && formik.errors.name
														? formik.errors.name
														: null}
												</FormHelperText>
											</FormControl>
											{/* </div> */}
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
														value={moment(staff.birthAt).format(
															"YYYY-MM-DD"
														)}
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
												type="submit"
												color="success"
												onClick={() => {
													// props.onStaff(staff);
													// console.log(staff);
													// formik.handleSubmit()
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
		</form>
	);
}
