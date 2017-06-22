import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as  compression from 'compression';
import {ProductService} from "../services/ProductService";
var productApp = express();

// parse application/x-www-form-urlencoded
productApp.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
productApp.use(bodyParser.json());
productApp.use(compression());

productApp.get('/', function (req, res) {
    res.send('Hello World!');
});

let productService = new ProductService();

productApp.route('/categories')
    .get((req,res) => {
        productService.searchCategories(req, res);
    })
    .post((req,res) =>
    {
        productService.createCategory(req,res);
    });

productApp.route('/categories/:categoryId')
    .get((req,res) =>
    {
        productService.readCategory(req,res);
    }).post((req,res) =>
    {
        productService.createCategory(req,res);
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

export default productApp;