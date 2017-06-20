
class Session{
    token: string;
    loginTime: string;
    agent: string;
    ip: string
}import {Model} from "./Model";


export class Authentication implements Model{
    _id: string;
    userId: string;
    password: string;
    role: string;
    sessions:Array<Session>
}