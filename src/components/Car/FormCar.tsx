import React, { useEffect, useState } from "react";
// thành phần phản ứng được sử dụng để tạo cảnh báo ngọt ngào
import Button from "react-bootstrap/Button";

import FaceIcon from "@material-ui/icons/Face";

import { Car, statusCar } from "../../share/base-ticket/base-carOwner/Car";
import { TypeCar } from "../../share/base-ticket/base-carOwner/TypeCar";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {
	FormControl,
	InputLabel,
	MenuItem,
	OutlinedInput,
	Select,
	TextField,
} from "@material-ui/core";
import moment from "moment";

type Props = {
	car: Car;
	formModal: boolean;
	onCar: (car: Car) => void;
	typeCar: TypeCar[];
	onCancel: () => void;
};

export default function FormCar(props: Props) {
	const [car, setCar] = useState<Car>({});

	const textButton: string = props.car._id ? "Sua" : "Them";

	useEffect(() => {
		console.log(props.car.TypeCar);
		console.log(props.typeCar);

		setCar(props.car);
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
										<small>{textButton} xe</small>
									</div>
									<form role="form">
										<div className="form-group">
											<div className="input-group input-group-merge input-group-alternative">
												<FormControl variant="outlined" fullWidth>
													<InputLabel>Tên xe</InputLabel>
													<OutlinedInput
														endAdornment={<FaceIcon />}
														fullWidth
														label="Tên xe"
														defaultValue={""}
														value={car.name || ""}
														onChange={(event) => {
															setCar({
																...car,
																name: event.target.value,
															});
														}}
													/>
												</FormControl>
											</div>
										</div>

										<div className="form-group">
											<div className="input-group input-group-merge input-group-alternative">
												<FormControl variant="outlined" fullWidth>
													<InputLabel>Biển số xe</InputLabel>
													<OutlinedInput
														endAdornment={<FaceIcon />}
														fullWidth
														label="Biển số xe"
														value={car.licensePlates || ""}
														onChange={(event) => {
															setCar({
																...car,
																licensePlates: event.target.value,
															});
														}}
													/>
												</FormControl>
											</div>
										</div>

										<div className="form-group">
											<div className="input-group input-group-merge input-group-alternative">
												<FormControl variant="outlined" fullWidth>
													<InputLabel>Xuất xứ</InputLabel>
													<OutlinedInput
														endAdornment={<FaceIcon />}
														fullWidth
														label="Xuất xứ"
														defaultValue={""}
														value={car.origin || ""}
														onChange={(event) => {
															setCar({
																...car,
																origin: event.target.value,
															});
														}}
													/>
												</FormControl>
											</div>
										</div>

										{/* phân này là phần thêm này nhập  */}
										<div className="form-group">
											<div className="input-group input-group-merge input-group-alternative">
												<FormControl variant="outlined" fullWidth>
													{/* <InputLabel>Ngay nhap</InputLabel> */}
													<TextField
														fullWidth
														label="Ngay nhap"
														type="date"
														variant="outlined"
														onChange={(event) => {
															console.log(event.target.value);
															setCar({
																...car,
																entryAt: new Date(
																	event.target.value
																),
															});
														}}
														value={moment(car.entryAt).format(
															"YYYY-MM-DD"
														)}
														InputLabelProps={{
															shrink: true,
														}}
													/>
												</FormControl>
											</div>
										</div>

										{/* //phần này là trạng thái xe */}
										<div className="form-group">
											<div className="input-group input-group-merge input-group-alternative">
												<FormControl variant="outlined" fullWidth>
													<InputLabel id="demo-simple-select-outlined-label">
														Trạng thái
													</InputLabel>
													<Select
														defaultValue={statusCar.using}
														onChange={(event, value: any) => {
															setCar({ ...car, statusCar: value });
														}}
														label="Trạng thái"
													>
														<MenuItem value=""></MenuItem>
														<MenuItem value={statusCar.using}>
															{statusCar.using}
														</MenuItem>
														<MenuItem value={statusCar.fixing}>
															{statusCar.fixing}
														</MenuItem>
													</Select>
												</FormControl>
											</div>
										</div>

										{/* //phần này là loại xe */}
										<div className="form-group">
											<div className="input-group input-group-merge input-group-alternative">
												{/* <div className="input-group-prepend">
                                                <span className="input-group-text"><RecentActorsIcon /></span>
                                            </div> */}
												{console.log(car.TypeCar)}
												<Autocomplete
													value={props.typeCar[1]}
													options={props.typeCar}
													getOptionLabel={(option: TypeCar) =>
														option.nameTypeCar || ""
													}
													fullWidth
													onChange={(event: any, value: any) => {
														setCar({
															...car,
															typeCarId: value?._id || "",
														});
													}}
													renderInput={(params) => (
														<TextField
															{...params}
															label="Loai xe"
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
													props.onCar(car);
												}}
											>
												{textButton}
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
