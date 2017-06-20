import {DAO} from "./DAO";
import {User} from "../models/User";
export class UserDAO extends DAO<User> {
    constructor() {
        super(User);
    }
}