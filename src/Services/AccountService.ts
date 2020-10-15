import { Staff } from "../share/base-ticket/base-carOwner/Staff";
import  {getAxios} from "./ValidateService"
import URL from "../config/URLConfig"
import { Paging } from "../share/base-ticket/Paging";
import { APIService } from "./APIService";
export class AccountService{
    

    

    public static login(staff : any) : Promise<Staff>{
        return APIService.create(`${URL}/user/login`, staff)
    }

    
    
}