var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { Invoice } from './classes/Invoices.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
var form = document.querySelector('.new-item-form');
//inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
//list template instance
var ul = document.querySelector('ul');
var list = new ListTemplate(ul);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    var doc;
    if (type.value == 'invoice') {
        doc = new (Invoice.bind.apply(Invoice, __spreadArrays([void 0], values)))();
    }
    else {
        doc = new (Payment.bind.apply(Payment, __spreadArrays([void 0], values)))();
    }
    list.render(doc, type.value, 'end');
});
// //GENERİCS
// const addUID = <T extends {name: string}>(obj: T) => {
//     let uid = Math.floor(Math.random()*100);
//     return{...obj, uid};
// }
// let docOne = addUID({name: 'yoshi', age: 40});
// // let docTwo = addUID('hello')
// console.log(docOne.age);
// with interfaces
// interface Resource<T> {
//     uid: number;
//     resourceName: string;
//     data: T;
// }
// const docThree: Resource<object> = {
//     uid: 1,
//     resourceName:'person',
//     data: {name: 'shaun'}
// }
// const docFour: Resource<string[]> = {
//     uid: 2,
//     resourceName: 'shoppingList',
//     data: ['bread', 'milk', 'toilet roll']
// }
// console.log(docThree, docFour);
// ENUMS
// enum ResourceType { BOOK, AUTHOR,FILM, DIRECTOR, PERSON }
// interface Resource<T> {
//     uid: number;
//     resourceType: ResourceType;
//     data: T;
// }
// const docOne: Resource<object> = {
//     uid: 1,
//     resourceType: ResourceType.BOOK,
//     data: {title: 'name of the wind'}
// }
// const docTwo: Resource<object> = {
//     uid: 10,
//     resourceType: ResourceType.PERSON,
//     data: {name: 'yoshi'}
// }
// console.log(docOne, docTwo);
// TUPLES
var arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];
var tup = ['ryu', 25, true];
tup[0] = 'ken';
tup[1] = 30;
// let student: [string, number];
// student = [223423, 'ken']
// student = ['chun-li', 223423];
