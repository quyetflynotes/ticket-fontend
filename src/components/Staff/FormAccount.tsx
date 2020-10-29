/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState, useEffect } from "react";
// thành phần phản ứng được sử dụng để tạo cảnh báo ngọt ngào
import Button from "react-bootstrap/Button";
import BrandingWatermarkIcon from "@material-ui/icons/BrandingWatermark";
import { Staff } from "../../share/base-ticket/base-carOwner/Staff";
import { FormControl, InputLabel, OutlinedInput } from "@material-ui/core";
import { Account } from "../../share/base-ticket/base-carOwner/Account";

type Props = {
	account: Account;
	formModal: boolean;
	onSave: (account: Account) => void;
	onCancel: () => void;
};

export default function FormAccount(props: Props) {
	const [account, setAccount] = useState<Account>(props.account);

	const textButtonEdit = props.account._id ? "Sửa tài khoản" : "Thêm tài khoản mới";

	useEffect(() => {
		setAccount(props.account);
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
											<div className="input-group input-group-merge input-group-alternative">
												<FormControl variant="outlined" fullWidth>
													<InputLabel>Tên tài khoản</InputLabel>
													<OutlinedInput
														endAdornment={<BrandingWatermarkIcon />}
														fullWidth
														label="Tên tài khoản"
														value={account.username || ""}
														onChange={(event) => {
															setAccount({
																...account,
																username: event.target.value,
															});
														}}
													/>
												</FormControl>
											</div>
										</div>

										<div className="form-group">
											<div className="input-group input-group-merge input-group-alternative">
												<FormControl variant="outlined" fullWidth>
													<InputLabel>Mật khẩu</InputLabel>
													<OutlinedInput
														endAdornment={<BrandingWatermarkIcon />}
														fullWidth
														label="Mật khẩu"
														value={account.password || ""}
														onChange={(event) => {
															setAccount({
																...account,
																password: event.target.value,
															});
														}}
													/>
												</FormControl>
											</div>
										</div>

										

										

										<div className="text-center">
											<Button
												color="success"
												onClick={() => {
													props.onSave(account);
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
