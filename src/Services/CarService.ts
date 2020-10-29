import { Staff } from "../share/base-ticket/base-carOwner/Staff";
import  {getAxios} from "./ValidateService"
import URL from "../config/URLConfig"
import { Paging } from "../share/base-ticket/Paging";
import { APIService } from "./APIService";
import { Car } from "../share/base-ticket/base-carOwner/Car";
export class CarService{

    public static list(page : number = 0, search : string = "") : Promise<Paging<Car> >{
        let params = {page : page,
            query : {},
            search : [
                { 
                    content : search,
                    fields : ["name", "licensePlates", "origin", "statusCar"]
                }
            ]
        }
        return APIService.listByQuery( `${URL}/manager/car`,params)
    }

    public static getById(id : string) : Promise<any>{
        return APIService.getById(`${URL}/manager/car/${id}`)
    }

    public static create(staff : Car) : Promise<any>{
        return APIService.create(`${URL}/manager/car`, staff)
    }

    public static delete(id : string) : Promise<any>{
        return APIService.delete(`${URL}/manager/car`, id)
    }
    
}