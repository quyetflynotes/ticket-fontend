import axios from "axios";
import { useSelector } from "react-redux";
import {dispatch} from "../Redux/Store"



export const getAxios = async () => {
    axios.interceptors.request.use(
        res => {
            
            return res
        },
        err => {
    
        }
    );
    axios.interceptors.response.use(
        res => {
      
            return res;
        },
        err => {
            console.log(err.message);
            if (err.message == "Network Error") {
                dispatch.message.showError("Lỗi kết nối máy chủ")
            }
            if (err.response.status == 404) {
            }
            if (err.response.status == 401) {

            }
    
    
            if (err.response.status == 500) {
                if (err.response.message) {
                    dispatch.message.showError(err.response.message)
                }
                if (err.response.data && err.response.data.message) {
                    dispatch.message.showError(err.response.data.message)
                }
                else {
                    dispatch.message.showError("Có lỗi xảy ra ")
                }
            }
        }
    )
    axios.defaults.headers.common["Authorization"] = `LQN 5f78812aeb8ac1182da0ddfd`
    return axios;
}





// export default getAxios();