import * as express from 'express';
import productApp from "./applications/productApp";
var app = express();

app.use('/product-app', productApp);
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});

