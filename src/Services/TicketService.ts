import { Staff } from "../share/base-ticket/base-carOwner/Staff";
import  {getAxios} from "./ValidateService"
import URL from "../config/URLConfig"
import { Paging } from "../share/base-ticket/Paging";
import { APIService } from "./APIService";
import { Ticket } from "../share/base-ticket/base-carOwner/Ticket";
export class TicketService{


    public static list(page : number = 0, search : string = "") : Promise<Paging<Ticket> >{
        let params = {page : page,
            query : {},
            search : [
                { 
                    content : search,
                    fields : []
                }
            ]
        }
        return APIService.listByQuery(  `${URL}/manager/ticket`,params)
    }

    public static getById(id : string) : Promise<Staff>{
        return APIService.getById(`${URL}/manager/ticket/${id}`)
    }

    public static create(staff : Staff) : Promise<Staff>{
        
        return APIService.create(`${URL}/manager/ticket`, staff)
    }

    public static delete(id : string) : Promise<any>{
        return APIService.delete(`${URL}/manager/ticket`, id)
    }
    
}