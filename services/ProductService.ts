import {ProductDAO, CategoryDAO} from "../data-access/DAO";
import {Category, Product} from "../data-access/model";
import {ProductDomain} from "../domains/ProductDomain";
export class ProductService{
    private productDomain:ProductDomain;
    constructor(){
        this.productDomain = new ProductDomain();
    }

    async searchCategories(req, res){
        let categories = await this.productDomain.searchCategory();
        res.send(categories);
    }

    async readCategory(req,res){
        let categoryId = req.params.categoryId;
        let category = await this.productDomain.readCategory(categoryId);
        res.send(category);
    }

    async createCategory(req,res){
        let categoryId = req.params.categoryId;
        let category = req.body;
        let result = await this.productDomain.createCategory(categoryId, category);
        res.send(result);
    }
}