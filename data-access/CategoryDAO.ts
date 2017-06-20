import {DAO} from "./DAO";
import {Category} from "../models/Category";
export class CategoryDAO extends DAO<Category> {
    constructor() {
        super(Category);
    }
}