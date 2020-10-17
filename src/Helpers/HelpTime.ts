export class HelpTime {
    public static convertTimeToDate(timeHour : string) : Date{
        let now = new Date();
        now.setHours(parseInt(timeHour.substring(0, timeHour.indexOf(":"))));
        now.setMinutes(parseInt(timeHour.substring(timeHour.indexOf(":")+1, timeHour.length)));
        return now;
    }
    public static getHourAndMinute(date : Date = new Date) : string{
        date = new Date(date)
        return `0${date.getHours()}`.slice(-2) + `:`+`0${date.getMinutes()}`.slice(-2)
    }
    public static formatDate(date : Date = new Date) : string{
        date = new Date(date);
        return `0${date.getDate()}`.slice(-2) + `-`+`0${date.getMonth()+1}`.slice(-2) +`-`+`${date.getFullYear()}`
    }

    

}