
//https://rbuckton.github.io/reflect-metadata/#syntax
import "reflect-metadata";

export const DESIGN_PATH = 'design:path';
export const DESIGN_METHOD = 'design:method';
export const GET  = 'get';
export const POST  = 'post';
export const PUT  = 'put';

export function Path(path) {
    return Reflect.metadata('design:path', path);
}
export function Method(method) {
    return Reflect.metadata('design:method', method);
}




// Metadata introspection
/*
let obj = new C("a", 1);
let paramTypes = Reflect.getMetadata("design:method", obj, "add");
console.log(paramTypes);
    */