import { Staff } from "../share/base-ticket/base-carOwner/Staff";
import  {getAxios} from "./ValidateService"
import URL from "../config/URLConfig"
import { Paging } from "../share/base-ticket/Paging";
import { APIService } from "./APIService";
export class StaffService{
    public static list(page : number = 0, search : string = "") : Promise<Paging<Staff> >{
        let params = {page : page,
            query : {},
            search : [
                { 
                    content : search,
                    fields : ["name"]
                }
            ]
        }
        return APIService.listByQuery(`${URL}/manager/staff`,params)
    }

    public static getById(id : string) : Promise<Staff>{
        return APIService.getById(`${URL}/manager/staff/${id}`)
    }

    public static create(staff : Staff) : Promise<Staff>{
        
        return APIService.create(`${URL}/manager/staff`, staff)
    }

    public static delete(id : string) : Promise<any>{
        return APIService.delete(`${URL}/manager/staff`, id)
    }


    
}