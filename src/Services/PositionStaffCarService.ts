import { Staff } from "../share/base-ticket/base-carOwner/Staff";
import  {getAxios} from "./ValidateService"
import URL from "../config/URLConfig"
import { Paging } from "../share/base-ticket/Paging";
import { APIService } from "./APIService";
import PostionStaff from "../pages/PostionStaff";
export class PositionStaffCarService{


    public static list(page : number = 0, search : string = "") : Promise<Paging<PostionStaff> >{
        let params = {page : page,
            query : {},
            search : [
                { 
                    content : search,
                    fields : ["name"]
                }
            ]
        }
        return APIService.listByQuery( `${URL}/manager/positionStaff`,params)
    }

    public static getById(id : string) : Promise<Staff>{
        return APIService.getById(`${URL}/manager/positionStaff/${id}`)
    }

    public static create(staff : Staff) : Promise<Staff>{
        
        return APIService.create(`${URL}/manager/positionStaff`, staff)
    }

    public static delete(id : string) : Promise<any>{
        return APIService.delete(`${URL}/manager/positionStaff`, id)
    }
    
}