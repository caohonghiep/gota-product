import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as  compression from 'compression';
import {ProductService} from "../services/ProductService";

export default class Aplication<T>{
    protected app = express();
    protected service:T;
    constructor(service:T){
        this.service = service;
    }

    getInstance(){
        return this.app;
    }
}