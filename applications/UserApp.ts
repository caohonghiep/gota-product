
import Application from "./Aplication";
import UserService from "../services/UserService";
export default class UserApp extends Application<UserService>{
    constructor(){
        super(new UserService());

    }
}