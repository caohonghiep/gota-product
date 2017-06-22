import {ProductDomain} from "../domains/ProductDomain";
import "reflect-metadata";
import {Path, Method, GET, POST} from './Decorator'
@Path('/product-service')
export class ProductService{
    private productDomain:ProductDomain;
    constructor(){
        this.productDomain = new ProductDomain();
    }

    @Method(GET)
    @Path('/categories')
    async searchCategories(req, res){
        let categories = await this.productDomain.searchCategory();
        res.send(categories);
    }

    @Method(POST)
    @Path(['/categories','/categories/:categoryId'])
    async createCategory(req,res){
        let categoryId = req.params.categoryId;
        let category = req.body;
        let result = await this.productDomain.createCategory(categoryId, category);
        res.send(result);
    }

    @Method(GET)
    @Path('/categories/:categoryId')
    async readCategory(req,res){
        let categoryId = req.params.categoryId;
        let category = await this.productDomain.readCategory(categoryId);
        res.send(category);
    }


}