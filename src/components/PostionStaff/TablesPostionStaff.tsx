import React from "react";
// thành phần phản ứng được sử dụng để tạo cảnh báo ngọt ngào
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import AddIcon from "@material-ui/icons/Add";
import { PostionStaff } from "../../share/base-ticket/base-carOwner/PostionStaff";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

type Props = {
	postion: PostionStaff[];
	onPostionStaffs: (postion: PostionStaff) => void;
	onDeletePositonStaff: (id: string) => void;
	search?(value: string): void;

};
var timeOut: any;
export default function TablesPostionStaff(props: Props) {
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
						<h3 className="mb-0">Danh sách chuc vu</h3>
					</div>

					<div className="col-6 text-right">
						<button
							onClick={() => {
								props.onPostionStaffs({});
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
				<table className="table align-items-center table-flush table-striped">
					<thead className="thead-light">
						<tr>
							<th scope="col" className="sort" data-sort="name">
								Tên Chức vụ
							</th>
							<th scope="col" className="sort" data-sort="birthday">
								Mô tả
							</th>
							<th scope="col" className="sort" data-sort="birthday">
								Thao tác
							</th>
						</tr>
					</thead>
					<tbody>
						{props?.postion?.map((postionItem: PostionStaff) => {
							return (
								<tr>
									<td className="table-user">
										<b>{postionItem.name}</b>
									</td>
									<td>
										<span className="text-muted">
											{postionItem.description}
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
														Sua chuc vu
													</Tooltip>
												}
											>
												<EditIcon
													onClick={() => {
														props.onPostionStaffs(postionItem);
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
														Xoa chuc vu
													</Tooltip>
												}
											>
												<DeleteIcon
													onClick={() => {
														if (postionItem && postionItem._id)
															props.onDeletePositonStaff(
																postionItem._id
															);
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
