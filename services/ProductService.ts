import {ProductDAO, CategoryDAO} from "../data-access/DAO";
import {Category, Product} from "../data-access/model";
export class ProductService{
    private productDAO:ProductDAO;
    private categoryDAO:CategoryDAO;
    constructor(){
        this.categoryDAO = new CategoryDAO();
        this.productDAO = new ProductDAO();
    }

    async findAllCategories(req,res){
        let categories = await this.categoryDAO.search();
        res.send(categories);
    }
}