import { Dialog } from "@material-ui/core";
import React, { useEffect, Component, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Ticket } from "../../share/base-ticket/base-carOwner/Ticket";
import DiemDonTra from "../DiemDonTra";

type Props = {
  showForm: boolean;
  infoTicket: Ticket;
  onClose: () => void;
  onSave: (infoTicket: Ticket) => void;
};
export default function NhapThongTinVe(props: Props) {

  const [infoTicket, setInfoTicket] = useState<Ticket>({})
  useEffect(() => {
    setInfoTicket(props.infoTicket);
    return () => {
    }
  }, [props])


  return (
    <div
      className={
        props.showForm
          ? "modal fade show show-dialog"
          : "modal fade hidden-dialog"
      }
      id="modal-form"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="modal-form"
      aria-hidden="true"
      aria-modal="true"
      onClick={() => { }}
    >


      <Dialog fullScreen open={props.showForm} >
      <div className="card bg-secondary border-0 mb-0">
          <div className="khungDatVe">
            <div className="khung">
              <h3 className="text-center">THÔNG TIN GHẾ</h3>
              <div>
                Ghế: &nbsp;
                <div className="footer-total">{infoTicket?.ChairCar?.codeChair}</div>
              </div>

              <DiemDonTra
                infoTicket={infoTicket}
                onChange={(ticket: Ticket) => { 
                  console.log(ticket);
                  setInfoTicket({...ticket})
                 }}
              ></DiemDonTra>


            </div>
            <div className="khung">
              <h3 className="text-center">NHẬP THÔNG TIN KHÁCH HÀNG</h3>
              <div className="thongTin">
                <div className="form-group">
                  <label
                    className="form-control-label"
                    htmlFor="exampleFormControlInput1"
                  >
                    Họ tên
                    <span></span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Nhập họ và tên"
                    value={infoTicket?.customer?.name || ""}
                    onChange={(e) => setInfoTicket({ ...infoTicket, customer: { ...infoTicket.customer, name: e.target.value } })}
                  />
                </div>
                <div className="form-group">
                  <label
                    className="form-control-label"
                    htmlFor="exampleFormControlInput1"
                  >
                    Số điện thoại
                    <span></span>
                  </label>
                  <ReactPhoneInput country={"vn"} onChange={(value : string) => setInfoTicket({ ...infoTicket, customer: { ...infoTicket.customer, phoneNumer: value } })}
                    value={infoTicket?.customer?.phoneNumer} />
                </div>
                {/* <div className="form-group">
                  <label
                    className="form-control-label"
                    htmlFor="exampleFormControlInput1"
                  >
                    Email
                    <span></span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="email@gmail.com"
                    value  = {props?.infoTicket.customer.}
                  />
                </div> */}
                <div className="form-group">
                  <label
                    className="form-control-label"
                    htmlFor="exampleFormControlSelect1"
                  >
                    Tình trạng
                    <span></span>
                  </label>

                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option>Đã trả tiền</option>
                    <option>Chưa trả tiền</option>
                  </select>
                </div>
                <div className="form-group">
                  <label
                    className="form-control-label"
                    htmlFor="exampleFormControlInput1"
                  >
                    Ghi chú
                  </label>
                  <textarea
                    className="form-control"
                    placeholder="Các yêu cầu đặc biệt không thể được đảm bảo - nhưng nhà xe sẽ cố gắng hết sức để đáp ứng nhu cầu của bạn."
                  />
                </div>
                <div style={{ fontSize: 14 }} className="form-group">
                  <span>Bằng việc bấm nút Đặt chỗ, bạn đã đồng ý với </span>
                  <a href="#" target="_blank">
                    Chính sách bảo mật thông tin{" "}
                  </a>
                  và
                  <a href="#" target="_blank">
                    {" "}
                    Quy chế
                  </a>
                  <span> của NhaXe.Com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="khungButton">
            <Button color="success" className="btn-success" onClick={(e) => props.onSave(infoTicket)}>
              Thêm
            </Button>
            <Button color="warning" className="btn-warning float-right" onClick={(e) => props.onClose()}>
              Hủy
            </Button>
          </div>
        </div>
      </Dialog>









      <div
        className=""
        role="document"
      >

      </div>
    </div>
  );
}
