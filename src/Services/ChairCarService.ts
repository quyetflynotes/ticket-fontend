import { Staff } from "../share/base-ticket/base-carOwner/Staff";
import  {getAxios} from "./ValidateService"
import URL from "../config/URLConfig"
import { Paging } from "../share/base-ticket/Paging";
import { APIService } from "./APIService";
import { ChairCar } from "../share/base-ticket/base-carOwner/ChairCar";
export class ChairCarService{


    public static list(page : number = 0, search : string = "") : Promise<Paging<any> >{
        let params = {page : page,
            query : {},
            
        }
        return APIService.listByQuery( `${URL}/manager/ChairCar`,params)
    }

    public static getById(id : string) : Promise<any>{
        return APIService.getById(`${URL}/manager/ChairCar/${id}`)
    }

    public static create(staff : Staff) : Promise<any>{
        
        return APIService.create(`${URL}/manager/ChairCar`, staff)
    }

    public static autoCreate(staff : Staff) : Promise<any>{
        
        return APIService.create(`${URL}/manager/ChairCar/autoCreate`, staff)
    }
    

    public static delete(id : string) : Promise<any>{
        return APIService.delete(`${URL}/manager/ChairCar`, id)
    }
    public static getByCarid(id : string) : Promise<any>{
        return APIService.getById(`${URL}/manager/ChairCar/getByCarId/${id}`)
    }
    
}