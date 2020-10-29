import { Staff } from "../share/base-ticket/base-carOwner/Staff";
import  {getAxios} from "./ValidateService"
import URL from "../config/URLConfig"
import { Paging } from "../share/base-ticket/Paging";
import { APIService } from "./APIService";
import { Account } from "../share/base-ticket/base-carOwner/Account";
export class AccountService{
    

    

    public static login(account : any) : Promise<string>{
        return APIService.create(`${URL}/user/login`, account)
    }

    public static getMe(): Promise<Staff>{
        return getAxios().then(axios=>{
            return axios({
                method : "GET",
                url : `${URL}/user/getMe`
            }).then(res=>{
                return res.data;
            })
            .catch(err => null)
        })
    }

    public static list(page : number = 0, search : string = "") : Promise<Paging<any> >{
        let params = {page : page,
            query : {},
            
        }
        return APIService.listByQuery( `${URL}/manager/account`,params)
    }

    public static getById(id : string) : Promise<any>{
        return APIService.getById(`${URL}/manager/account/${id}`)
    }

    public static create(account : Account) : Promise<any>{
        return APIService.create(`${URL}/manager/account`, account)
    }

    public static delete(id : string) : Promise<any>{
        return APIService.delete(`${URL}/manager/account`, id)
    }



    
    
}