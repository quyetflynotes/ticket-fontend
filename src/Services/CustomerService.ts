import { Staff } from "../share/base-ticket/base-carOwner/Staff";
import  {getAxios} from "./ValidateService"
import URL from "../config/URLConfig"
import { Paging } from "../share/base-ticket/Paging";
import { APIService } from "./APIService";
import { Customer } from "../share/base-ticket/base-carOwner/Customer";
export class CustomerService{


    public static list(page : number = 0, search : string = "") : Promise<Paging<Customer>>{
        let params = {page : page,
            query : {},
            search : [
                { 
                    content : search,
                    fields : ["name", "CMND", "phoneNumber", "email"]
                }
            ]
        }
        return APIService.listByQuery( `${URL}/manager/customer`,params)
    }

    public static getById(id : string) : Promise<Customer>{
        return APIService.getById(`${URL}/manager/customer/${id}`)
    }

    public static create(customer : Customer) : Promise<Customer>{
        
        return APIService.create(`${URL}/manager/customer`, customer)
    }

    public static delete(id : string) : Promise<any>{
        return APIService.delete(`${URL}/manager/customer`, id)
    }
    
}