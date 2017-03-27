
export class Model {
    _id?: string;
    constructor(object: Object){
        Object.keys(object).forEach(key=>{
           this[key] = object[key];
        });
    }
}

export class Product implements Model{
    _id: string;
    categoryId: string;
    code: string;
    name: string;
    description: string;
    price: number
    colors: Array<string>;
    images: Array<string>;
    constructor(object: Object){
        this._id = object['_id'];
        this.categoryId = object['categoryId'];
        this.code = object['code'];
        this.name = object['name'];
        this.description =  object['description'];
        this.price = object['price'];
        this.colors = object['colors'];
        this.images = object['images'];
    }
}

export class Category implements Model{
    _id: string;
    name: string;
    description: string;
    images: Array<string>;
    childrenIds:Array<string>;
    constructor(object: Object){
        this._id = object['_id'];
        this.name = object['name'];
        this.description =  object['description'];
        this.images = object['images'];
        this.childrenIds = object['childrenIds'];
    }
}


