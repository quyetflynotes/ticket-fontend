import { Staff } from "../share/base-ticket/base-carOwner/Staff";
import  {getAxios} from "./ValidateService"
import URL from "../config/URLConfig"
import { Paging } from "../share/base-ticket/Paging";
import { APIService } from "./APIService";
export class TripService{
    public static list(page : number = 1) : Promise<Paging<Staff> >{
        return APIService.list(page, `${URL}/manager/trip`)
    }

    public static getById(id : string) : Promise<Staff>{
        return APIService.getById(`${URL}/manager/trip/${id}`)
    }

    public static create(staff : Staff) : Promise<Staff>{
        
        return APIService.create(`${URL}/manager/trip`, staff)
    }

    public static delete(id : string) : Promise<any>{
        return APIService.delete(`${URL}/manager/trip`, id)
    }
    
}