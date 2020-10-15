export class HelpRouter {
    public static getIdFromPath(path : any) : string{
        path = path.toString();
        let getId = path.substring(path.lastIndexOf("/") + 1, path.length);;
        return getId;
    }

}