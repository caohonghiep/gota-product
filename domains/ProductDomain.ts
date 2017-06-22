
import {ProductDAO} from "../data-access/ProductDAO";
import {CategoryDAO} from "../data-access/CategoryDAO";
import {Category} from "../models/Category";
/**
 * Created by AAAA on 3/24/2017.
 */

function changeAlias( alias ) {
    var str = alias.trim();
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g, "-");
    /* tìm và thay thế các kí tự đặc biệt trong chuỗi sang kí tự - */
    str = str.replace(/-+-/g, "-"); //thay thế 2- thành 1-
    str = str.replace(/^\-+|\-+$/g, "");
    //cắt bỏ ký tự - ở đầu và cuối chuỗi
    return str
}
export class ProductDomain{
    private productDAO:ProductDAO;
    private categoryDAO:CategoryDAO;
    constructor(){
        this.categoryDAO = new CategoryDAO();
        this.productDAO = new ProductDAO();
    }

    async searchCategory():Promise<Array<Category>>{
        let categories = await this.categoryDAO.search();
        return categories;
    }

    async readCategory(categoryId: string):Promise<Category>{
        let category = await this.categoryDAO.read(categoryId);
        return category;
    }

    async createCategory(parentCategoryId, categoryJson):Promise<string>{
        let categoryId:string;
        let category = new Category(categoryJson);
        let error;
        do{
            error = null;
            try {
                categoryId =  await this.categoryDAO.create(category);
            }catch (err){
                error = err;
                category._id = category._id + Math.floor((Math.random() * 10) + 1);
            }
        }while (error && error.code === 11000)

        if(parentCategoryId){
            let parentCategory:Category;
            try{
                parentCategory = await this.categoryDAO.read(parentCategoryId);
            }catch (err){
                console.log('Reading is Fail: %s', JSON.stringify(err));
            };
            if(parentCategory){
                let childrenIds = parentCategory.childrenIds;
                if(Array.isArray(childrenIds)){
                    childrenIds.push(categoryId);
                }else{
                    childrenIds = [categoryId];
                }
                await this.categoryDAO.update(parentCategoryId,{childrenIds:childrenIds})
            }
        }

        return categoryId;
    }


}