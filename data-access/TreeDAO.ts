import {DAO} from "./DAO";
import {Tree} from "../models/Tree";
export class TreeDAO extends DAO<Tree> {
    constructor() {
        super(Tree);
    }
}