import {ProductDomain} from "../domains/ProductDomain";
export default class UserService{
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