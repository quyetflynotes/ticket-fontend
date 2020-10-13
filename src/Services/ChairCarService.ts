import { Staff } from "../share/base-ticket/base-carOwner/Staff";
import  {getAxios} from "./ValidateService"
import URL from "../config/URLConfig"
import { Paging } from "../share/base-ticket/Paging";
import { APIService } from "./APIService";
import { ChairCar } from "../share/base-ticket/base-carOwner/ChairCar";
export class ChairCarService{


    public static list(page : number = 0) : Promise<Paging<ChairCar> >{
        return APIService.list(page, `${URL}/manager/ChairCar`)
    }

    public static getById(id : string) : Promise<ChairCar>{
        return APIService.getById(`${URL}/manager/ChairCar/${id}`)
    }

    public static create(staff : Staff) : Promise<ChairCar>{
        
        return APIService.create(`${URL}/manager/ChairCar`, staff)
    }

    public static delete(id : string) : Promise<any>{
        return APIService.delete(`${URL}/manager/ChairCar`, id)
    }
    public static getByCarid(id : string) : Promise<any>{
        id = "5f7e8b727aaa101a1df7ec71";
        return APIService.getById(`${URL}/manager/ChairCar/getByCarId/${id}`)
    }
    
}