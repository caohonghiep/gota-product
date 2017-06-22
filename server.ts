import * as express from 'express';
var app = express();
import "reflect-metadata";
import ProductApp from "./applications/ProductApp";
import {ProductService} from "./services/ProductService";

let productApp = new ProductApp;
app.use(productApp.getInstance());
//app.use('/product-app', productApp);
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
