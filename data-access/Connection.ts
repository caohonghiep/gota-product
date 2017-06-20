'use strict';
import {Server, Db, Collection} from 'mongodb';

import {config as databaseConfig} from './database-config';

const host = databaseConfig.host;
const port = databaseConfig.port;
const databaseName = databaseConfig.databaseName;

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class Connection {
    public static db: Db;
    constructor(){}
    public static async open():Promise<Db>{
        if(!Connection.db){
            let server = new Server(host, port);
            let db = new Db(databaseName, server);
            //console.log('Connecting to => mongodb://' + host + ':' + port + '/' + databaseName);
            try{
                await db.open();
                console.log("Connected to %s ",'mongodb://' + host + ':' + port + '/' + databaseName);
                Connection.db = db;
            }catch (err){
                console.log("Connecting is Failed: " + JSON.stringify(err));
                throw err
            }
        }
        return Connection.db;
    }

    public static async createCollection(collectionName:string):Promise<Collection>{
        while(!Connection.db){
            await delay(1000);
        }
        let db = Connection.db;
        let collection:Collection;

        try{
            collection = await db.createCollection(collectionName);
            /*
            let collections: Collection[] = await db.collections();
            collections = collections.filter(item=>{
                return item.collectionName===collectionName
            });
            if(collections.length>0){
                collection = collections[0];
            }else{
                collection = await db.createCollection(collectionName);
            }
            */
            console.log("Created collection: %s", collectionName);
            return collection;
        }catch(err) {
            console.log("createCollection is Failed: " + JSON.stringify(err));
        }
    }
}
Connection.open();

export {Connection};