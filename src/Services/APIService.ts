import { Staff } from "../share/base-ticket/base-carOwner/Staff";
import  {getAxios} from "./ValidateService"
import URL from "../config/URLConfig"
import { Paging } from "../share/base-ticket/Paging";
export class APIService{
    public static list(page : number=0, url : string) : Promise<Paging<any> >{
        return getAxios().then(axios=>{
            return axios({
                method : "GET",
                url : `${url}`,
                params: {
                    page : page 
                  }
            }).then(res=>{
                return res.data;
            })
            .catch(err => null)
        })
    }

    public static getById(url : string) : Promise<any>{
        return getAxios().then(axios=>{
            return axios({
                method : "GET",
                url : `${url}`
            }).then(res=>{
                return res.data;
            })
            .catch(err => null)
        })
    }

    public static create(url : string, data : any) : Promise<any>{
        console.log(data);
        return getAxios().then(axios=>{
            return axios({
                method : "POST",
                url : `${url}`,
                data : data
            }).then(res=>{
                return res.data;
            })
            .catch(err => null)
        })
    }

    public static delete(url : string, data : any) : Promise<any>{
        console.log(data);
        return getAxios().then(axios=>{
            return axios({
                method : "DELETE",
                url : `${url}`,
                data : {_id : data}
            }).then(res=>{
                console.log(res)
                return res.data;
            })
            .catch(err => null)
        })
    }
}