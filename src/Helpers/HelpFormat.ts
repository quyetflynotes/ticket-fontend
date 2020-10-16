export class HelpFormat {
    
    public static FormatMoney(money : number) : string{
        if(!money) return "Free"
        var num =  `${money.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")} Đ`;
        return num;
    }
    

}