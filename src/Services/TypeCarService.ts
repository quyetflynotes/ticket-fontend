import { Staff } from "../share/base-ticket/base-carOwner/Staff";
import  {getAxios} from "./ValidateService"
import URL from "../config/URLConfig"
import { Paging } from "../share/base-ticket/Paging";
import { APIService } from "./APIService";
import { TypeCar } from "../share/base-ticket/base-carOwner/TypeCar";
export class TypeCarService{

    public static list(page : number = 0, search : string = "") : Promise<Paging<TypeCar> >{
        let params = {page : page,
            query : {},
            search : [
                { 
                    content : search,
                    fields : ["nameTypeCar"]
                }
            ]
        }
        return APIService.listByQuery(  `${URL}/manager/typeCar`,params)
    }

    public static getById(id : string) : Promise<Staff>{
        return APIService.getById(`${URL}/manager/typeCar/${id}`)
    }

    public static create(staff : Staff) : Promise<Staff>{
        
        return APIService.create(`${URL}/manager/typeCar`, staff)
    }

    public static delete(id : string) : Promise<any>{
        return APIService.delete(`${URL}/manager/typeCar`, id)
    }
    
}