import { Staff } from "../share/base-ticket/base-carOwner/Staff";
import  {getAxios} from "./ValidateService"
import URL from "../config/URLConfig"
import { Paging } from "../share/base-ticket/Paging";
import { APIService } from "./APIService";
import { Car } from "../share/base-ticket/base-carOwner/Car";
export class CarService{
    public static list(page : number = 0) : Promise<Paging<Car> >{
        return APIService.list(page, `${URL}/manager/car`)
    }

    public static getById(id : string) : Promise<Car>{
        return APIService.getById(`${URL}/manager/car/${id}`)
    }

    public static create(staff : Car) : Promise<Car>{
        return APIService.create(`${URL}/manager/car`, staff)
    }

    public static delete(id : string) : Promise<Car>{
        return APIService.delete(`${URL}/manager/car`, id)
    }
    
}