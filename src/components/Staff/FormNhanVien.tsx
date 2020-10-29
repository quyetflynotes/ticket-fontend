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
import validator from "validator";
import PhoneIcon from '@material-ui/icons/Phone';
import RoomIcon from '@material-ui/icons/Room';

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
		errors.name = "Vui lòng nhập họ tên ";
	}

	if (!staff.phoneNumer) {
		errors.phoneNumer = "Vui lòng nhập số điện thoại";
	} else if (!validator.isMobilePhone(staff.phoneNumer || "", "vi-VN")) {
		errors.phoneNumer = "Vui lòng nhập đúng số điện thoại";
	}

	if (!staff.identityCard) {
		errors.identityCard = "Vui lòng nhập chứng minh nhân dân";
	} else if (!validator.isNumeric(staff.identityCard, { no_symbols: true }) || staff.identityCard.length <9 || staff.identityCard.length >13) {
		errors.identityCard = "Vui lòng nhập đúng chứng minh nhân dân";
	}

		// else if (staff.firstName.length > 15) {
		// 	errors.firstName = "Must be 15 characters or less";
		// }
	
		// if (!staff.lastName) {
		// 	errors.lastName = "Required";
		// } else if (values.lastName.length > 20) {
		// 	errors.lastName = "Must be 20 characters or less";
		// }

		// if (!values.email) {
		// 	errors.email = "Required";
		// } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		// 	errors.email = "Invalid email address";
		// }

	return errors;
};

export default function FormNhanVien(props: Props) {
	const [staff, setStaff] = useState<Staff>({} as Staff);
	// console.log(props.staff);

	// setStaff({...props.staff})

	const textButtonEdit = props.staff._id ? "Sửa Nhân Viên" : "Thêm nhân viên";
	const init: Staff = {
		name: "",
		address: "",
		identityCard: "",
		phoneNumer: "",
		
	};
	const formik = useFormik({
		initialValues: { name: "", address: "", identityCard: "", phoneNumer: "" },
		validate,
		onSubmit: (values) => {
			values.birthAt = new Date(staff.birthAt || new Date());
			values.address = staff.address;
			props.onStaff(values)
		},
	});

	useEffect(() => {
		// console.log(props.staff);
		// console.log(props.staff);
		// gais trij truyen vao la trong;
		setStaff({...props.staff,birthAt : new Date(props.staff.birthAt || new Date())});
		// console.log(props.staff.name)
		formik.setErrors({});
		formik.errors = {};
		formik.resetForm();
		if (props.staff._id) {
			formik.setValues(props.staff);
		} else {
			formik.setValues({
				...props.staff,
				name: "",
				address: "",
				identityCard: "",
				phoneNumer: "",
				birthAt: new Date(),
			});
		}
	}, [props, props.staff]);



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
											<FormControl
												error={
													formik.touched.name && formik.errors.name
														? true
														: false
												}
												variant="outlined"
												fullWidth
											>
												<InputLabel>Tên nhân viên</InputLabel>
												<OutlinedInput
													endAdornment={<FaceIcon />}
													fullWidth
													name="name"
													label="Tên nhân viên"
													value={formik.values.name}
													onChange={formik.handleChange}
													onBlur={formik.handleBlur}
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
												<FormControl
													error={
														formik.touched.phoneNumer &&
														formik.errors.phoneNumer
															? true
															: false
													}
													variant="outlined"
													fullWidth
												>
													<InputLabel>Số điện thoai</InputLabel>
													<OutlinedInput
														endAdornment={<PhoneIcon />}
														fullWidth
														name="phoneNumer"
														label="Số điện thoai"
														value={formik.values.phoneNumer}
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
													/>
													<FormHelperText>
														{formik.touched.phoneNumer &&
														formik.errors.phoneNumer
															? formik.errors.phoneNumer
															: null}
													</FormHelperText>
												</FormControl>
											</div>
										</div>
										<div className="form-group">
											<div className="input-group input-group-merge input-group-alternative">
												<FormControl
													error={
														formik.touched.identityCard &&
														formik.errors.identityCard
															? true
															: false
													}
													variant="outlined"
													fullWidth
												>
													<InputLabel>CMND</InputLabel>
													<OutlinedInput
														endAdornment={<BrandingWatermarkIcon />}
														fullWidth
														name="identityCard"
														label="CMND"
														value={formik.values.identityCard}
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
													/>
													<FormHelperText>
														{formik.touched.identityCard &&
														formik.errors.identityCard
															? formik.errors.identityCard
															: null}
													</FormHelperText>
												</FormControl>
											</div>
										</div>

										<div className="form-group">
											<div className="input-group input-group-merge input-group-alternative">
												<FormControl
													error={
														formik.touched.address &&
														formik.errors.address
															? true
															: false
													}
													variant="outlined"
													fullWidth
												>
													<InputLabel>Địa chỉ</InputLabel>
													<OutlinedInput
														endAdornment={<RoomIcon />}
														fullWidth
														label="Địa chỉ"
														value={staff.address}
														onChange={(e) => { 
															setStaff({...staff, address: e.target.value})
														}}
														onBlur={(e) => { 
															setStaff({...staff, address: e.target.value})
														}}
													/>
													<FormHelperText>
														{formik.touched.address &&
														formik.errors.address
															? formik.errors.address
															: null}
													</FormHelperText>
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
														onChange={(e) => { 
															setStaff({...staff, birthAt : new Date(e.target.value)})
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
