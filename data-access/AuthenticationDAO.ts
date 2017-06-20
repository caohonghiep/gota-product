import {DAO} from "./DAO";
import {Authentication} from "../models/Authentication";
export class AuthenticationDAO extends DAO<Authentication> {
    constructor() {
        super(Authentication);
    }
}