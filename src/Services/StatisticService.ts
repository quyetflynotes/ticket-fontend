import { Staff } from "../share/base-ticket/base-carOwner/Staff";
import  {getAxios} from "./ValidateService"
import URL from "../config/URLConfig"
import { Paging } from "../share/base-ticket/Paging";
import { APIService } from "./APIService";
import { Car } from "../share/base-ticket/base-carOwner/Car";
import { Statistical } from "../share/base-ticket/Statistical/Statistical";
export class StatisticService{

    public static get(totalDay : number = 7, typeGet : string = "" ) : Promise<Statistical >{

        return APIService.listByQuery(`${URL}/manager/statistic`, {
            query: { 
                totalGet : totalDay
            }
        })
    }


    
}