export class Model {
    _id?: string;
    constructor(object: Object){
        Object.keys(object).forEach(key=>{
           this[key] = object[key];
        });
    }
}


