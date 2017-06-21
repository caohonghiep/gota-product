import * as express from 'express';
import productApp from "./applications/productApp";
var app = express();
import "reflect-metadata";

app.use('/product-app', productApp);
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});

//https://rbuckton.github.io/reflect-metadata/#syntax

function Type(type) { return Reflect.metadata("design:type", type); }
function ParamTypes(...types) { return Reflect.metadata("design:paramtypes", types); }
function ReturnType(type) { return Reflect.metadata("design:returntype", type); }
function Path(path) { return Reflect.metadata("design:path", path); }
function Method(method) { return Reflect.metadata("design:method", method); }

// Decorator application
@ParamTypes(String, Number)
class C {
    constructor(text, i) {
    }

    @Type(String)
    get name() { return "text"; }

    @Type(Function)
    @ParamTypes(Number, Number)
    @ReturnType(Number)
    @Path('/hello')
    @Method('post')
    add(x, y) {
        return x + y;
    }
}

// Metadata introspection
let obj = new C("a", 1);
let paramTypes = Reflect.getMetadata("design:method", obj, "add");
console.log(paramTypes);
