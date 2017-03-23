'use strict';
import {Server, Db} from 'mongodb';

import {config as databaseConfig} from './database-config';

const host = databaseConfig.host;
const port = databaseConfig.port;
const databaseName = databaseConfig.databaseName;

class Connection {
    public static db: Db;
    constructor(){}
    public static async open():Promise<Db>{

        if(!Connection.db){
            let server = new Server(host, port);
            let db = new Db(databaseName, server);
            console.log('Connecting to => mongodb://' + host + ':' + port + '/' + databaseName);
            try{
                await db.open();
                console.log("Connecting is Succeeded ");
                Connection.db = db;
            }catch (err){
                console.log("Connecting is Failed: " + JSON.stringify(err));
                throw err
            }
        }
        return Connection.db;
    }
    public static getDataBase():Db{
        if(!Connection.db){
            let message = 'Waiting connect to => mongodb://' + host + ':' + port + '/' + databaseName;
            console.log(message);
            throw new Error(message);
        }
        return Connection.db;
    }
}
Connection.open();

export {Connection};