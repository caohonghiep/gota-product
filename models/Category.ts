import {Model} from "./Model";
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
