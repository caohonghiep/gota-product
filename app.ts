import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as  compression from 'compression';
import {ProductService} from "./services/ProductService";
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(compression());

app.get('/', function (req, res) {
    res.send('Hello World!');
});

let productService = new ProductService();

app.get('/categories', function (req,res) {
    productService.findAllCategories(req,res);
});
/*
app.get('/categories/categoryId', function (req,res) {
    productionService.findAllCategories(req,res);
});

app.get('/categories/categoryId/products', function (req,res) {
    productionService.findAllProducts(req,res);
});

app.post('/categories/categoryId', function (req,res) {
    productionService.findAllProducts(req,res);
});
app.get('/categories/categoryId/products/productId', function (req,res) {
    productionService.findAllProducts(req,res);
});

app.put('/categories/categoryId/products/productId', function (req,res) {
    productionService.findAllProducts(req,res);
});

app.delete('/categories/categoryId/products/productId', function (req,res) {
    productionService.findAllProducts(req,res);
});
*/
//handleError(productApp);


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
