/// <reference path="model.ts" />

//https://blogs.msdn.microsoft.com/typescript/2015/11/03/what-about-asyncawait/
//https://github.com/Microsoft/TypeScript/issues/204

import {Connection} from "./Connection";
import {Collection, ObjectID} from "mongodb";
import {Model, Product, Category} from "./model";
import {isUndefined} from "util";

export class DAO<T extends Model> {
    private collectionName: string;
    constructor(clazz: Function){
        this.collectionName = clazz.name;
        // this.collection = Connection.getDataBase().collection(clazz.name);
    }
    get collection():Collection{
        return Connection.getDataBase().collection(this.collectionName);
    }

    private cleanNullValue(t: Object):void{
        Object.keys(t).forEach(key=>{
            if(t[key]===null ||  t[key]=== undefined){
                delete t[key];
            }
        });
    }

    async create(t: T): Promise<boolean>{
        let collection = this.collection;
        console.log('Creating "%s": %s', collection.collectionName, JSON.stringify(t));
        this.cleanNullValue(t);
        let result;
        try{
            result = await collection.insertOne(t, {w:1});
        }catch (err){
            console.log('Creating is Fail: %s', JSON.stringify(err));
            throw err;
        }
        //console.log('Creating is Success: %s', JSON.stringify(result.result));
        return result.result.ok ===1;
    };

    async read(id: string): Promise<T>{
        let collection = this.collection;
        console.log('Reading "%s" id: %s', collection.collectionName, id);
        let t: T;
        try{
            t = await collection.findOne({'_id':new ObjectID(id)});
        }catch (err){
            console.log('Reading is Fail: %s', JSON.stringify(err));
            throw err;
        };

        return t;
    };

    async update(id: string, updatingProperties: Object): Promise<boolean>{
        let collection = this.collection;
        console.log('Updating "%s": %s', collection.collectionName, JSON.stringify(updatingProperties));
        this.cleanNullValue(updatingProperties);
        let result;
        try{
            result = await collection.updateOne({'_id':new ObjectID(id)}, {$set: updatingProperties}, {w:1});
        }catch (err){
            console.log('Updating is Fail: %s', JSON.stringify(err));
            throw err;
        }
        return  result.result && result.result.ok===1;
    }

    async delete(id: string): Promise<boolean>{
        let collection = this.collection;
        console.log('Deleting "%s" id: %s', collection.collectionName, id);
        let result;
        try{
            result = await collection.deleteOne({'_id':new ObjectID(id)},{w:1});
        }catch (err){
            console.log('Deleting is Fail: %s', JSON.stringify(err));
            throw err;
        }
        return  result.result && result.result.ok===1;
    }

    async createMany(array: Array<T>): Promise<{ ok: number, n: number }>{
        let collection = this.collection;
        console.log('Creating Many "%s"', collection.collectionName);
        array.forEach(t=>{
            this.cleanNullValue(t);
        })
        let result;
        try{
            result = await collection.insertMany(array, {w:1});
        }catch (err){
            console.log('Creating Many is Fail: %s', JSON.stringify(err));
            throw err;
        }
        return result.result;
    };

    async search(query?: Object): Promise<Array<T>>{
        let collection = this.collection;
        console.log('Finding "%s"',  collection.collectionName);
        let array;
        try{
            array = await collection.find(query).toArray();
        }catch (err){
            console.log('Finding is Fail: %s', JSON.stringify(err));
            throw err;
        }
        return array;
    }

    async updateMany(query: Object, updatingProperties: Object): Promise<{ ok: number, n: number }>{
        let collection = this.collection;
        console.log('Updating Many "%s": %s', collection.collectionName, JSON.stringify(updatingProperties));
        this.cleanNullValue(updatingProperties);
        let result;
        try{
            result = await collection.updateMany(query, {$set: updatingProperties}, {w:1});
        }catch (err){
            console.log('Updating Many is Fail: %s', JSON.stringify(err));
            throw err;
        }
        return  result.result;
    }

    async deleteMany(query?: Object): Promise<{ ok: number, n: number }>{
        let collection = this.collection;
        console.log('Deleting Many "%s" query: %s', collection.collectionName, query);
        let result;
        try{
            result = await collection.deleteMany(query, {w:1});
        }catch (err){
            console.log('Deleting Many is Fail: %s', JSON.stringify(err));
            throw err;
        }
        return  result.result;
    }

}

export class ProductDAO extends DAO<Product>{
    constructor(){
        super(Product);
    }
}

export class CategoryDAO extends DAO<Category> {
    constructor() {
        super(Category);
    }
}
