import {ProductService} from "../services/ProductService";
import Aplication from "./Aplication";
export default class ProductApp extends Aplication<ProductService>{
    constructor(){
        super(new ProductService());
    }
}