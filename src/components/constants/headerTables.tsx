export interface BaseHeaderTable {
    text: string,
    shortCode: string
}


export const NhanVienHeader: BaseHeaderTable[] = [
    {text: "Ảnh & Tên", shortCode: "name"},
    {text: "Ngày sinh", shortCode: "birthday"},
    {text: "Địa chỉ", shortCode: "address"},
    {text: "Số điện thoại", shortCode: "numberphone"},
    {text: "CMND", shortCode: "cmnd"},
    {text: "Chức vụ", shortCode: "chucVu"},
    {text: "Thao tác", shortCode: "action"}
]

export const CustomerHeader: BaseHeaderTable[] = [
    {text: "Ảnh & Tên", shortCode: "name"},
    {text: "Ngày sinh", shortCode: "CMND"},
    {text: "Địa chỉ", shortCode: "address"},
    {text: "Số điện thoại", shortCode: "numberphone"},
    {text: "CMND", shortCode: "cmnd"},
    {text: "Chức vụ", shortCode: "chucVu"},
    {text: "Thao tác", shortCode: "action"}
]




