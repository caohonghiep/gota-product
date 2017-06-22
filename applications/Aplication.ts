import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as  compression from 'compression';
import {ProductService} from "../services/ProductService";
import "reflect-metadata";

const DESIGN_PATH = 'design:path'
const DESIGN_METHOD = 'design:method'

export default class Aplication<T> {
    protected service:T;
    protected app = express();
    constructor(service:T){
        this.service = service;
        // parse application/x-www-form-urlencoded
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // parse application/json
        this.app.use(bodyParser.json());
        this.app.use(compression());

        let serviceClass = this.service.constructor;
        let servicePath = Reflect.getMetadata(DESIGN_PATH, serviceClass);
        Object.getOwnPropertyNames(serviceClass.prototype).forEach(method=>{
            if(method !== 'constructor'){
                let designMethod = Reflect.getMetadata(DESIGN_METHOD, this.service, method);
                let designPath = Reflect.getMetadata(DESIGN_PATH, this.service, method);
                if(typeof designPath === 'string'){
                    designPath = [designPath];
                }
                designPath.forEach(path=>{
                    this.app[designMethod](servicePath+path,(request, response)=> this.service[method](request, response));
                })

            }
        })
    }

    public getInstance(){
        return  this.app;
    }
}