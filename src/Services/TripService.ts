import { Staff } from "../share/base-ticket/base-carOwner/Staff";
import  {getAxios} from "./ValidateService"
import { Trip } from "../share/base-ticket/base-carOwner/Trip";
import URL from "../config/URLConfig"
import { Paging } from "../share/base-ticket/Paging";
import { APIService } from "./APIService";
export class TripService{

    public static list(page : number = 0, search : string = "") : Promise<Paging<Trip> >{
        let params = {page : page,
            query : {},
            search : [
                { 
                    content : search,
                    fields : ["name"]
                }
            ]
        }
        return APIService.listByQuery(  `${URL}/manager/trip`,params)
    }

    public static getById(id : string) : Promise<Trip>{
        return APIService.getById(`${URL}/manager/trip/${id}`)
    }

    public static create(staff : Staff) : Promise<Staff>{
        
        return APIService.create(`${URL}/manager/trip`, staff)
    }

    public static delete(id : string) : Promise<any>{
        return APIService.delete(`${URL}/manager/trip`, id)
    }

    public static getListByCarId(id : string, page :number) :  Promise<Paging<Trip>>{
        let params = { 
            page : page,
            query : {
                CarId : id
            }
        }
        return APIService.listByQuery(`${URL}/manager/trip`, params)
    }

    public static getChairByTrip(id : string) : Promise<any>{
        return APIService.list(0, `${URL}/manager/trip/getChair/${id}`)
    }


    
    
}