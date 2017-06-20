import {DAO} from "./DAO";
import {Product} from "../models/Product";
export class ProductDAO extends DAO<Product>{
    constructor(){
        super(Product);
    }
}