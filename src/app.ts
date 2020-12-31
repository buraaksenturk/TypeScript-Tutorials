import { Invoice } from './classes/Invoices.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { Hasformatter } from './interfaces/HasFormatter.js';


const form = document.querySelector('.new-item-form') as HTMLFormElement;

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul = document.querySelector('ul')!;
const list= new ListTemplate(ul);

form.addEventListener('submit', (e:Event)=>{
    e.preventDefault();

    let values: [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber]

    let doc: Hasformatter;
    if(type.value == 'invoice'){
        doc = new Invoice(...values)
    }else{
        doc = new Payment(...values)
    }


    list.render(doc,type.value,'end');

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

// let arr = ['ryu', 25, true];
// arr[0] = false;
// arr[1] = 'yoshi';
// arr = [30, false, 'yoshi'];

// let tup: [string, number, boolean] = ['ryu', 25, true];
// tup[0] = 'ken';
// tup[1] = 30;

// let student: [string, number];
// student = [223423, 'ken']
// student = ['chun-li', 223423];