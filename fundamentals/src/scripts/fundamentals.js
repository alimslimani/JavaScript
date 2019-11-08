
//if let is inside of block, let is accessible just in this block

/* if(true){
    let carId1 = 42;
}
console.log(carId1); */

//var is accessible outside a block
/* if(true){
    var carId2 = 42;
}
console.log(carId2);
 */

// Rest Parameters
// save elements in array
/* function sendCards(day,...allCarIds){
    allCarIds.forEach(id=>  console.log(id));
}
sendCards('Monday',100,200); */

/* for(let i =0;i<4;i++){
    if(i===2){
        continue;
    }
    console.log(i);
} */

// == -> convert type
// === -> no conversion and compare the value
/* let id=123;
console.log(typeof(123));
console.log(typeof('123'));
console.log(123 == '123'); */

// Function & constructor
/* function Car(id){
    this.carId = id;
    this.start=function(){
        console.log('Start :' +this.carId);
    };
}

let vehicule = new Car(456);
vehicule.start(); */

// function & prototypes
/* function Car(id){
    this.carId = id;
}
Car.prototype.start=function(){
    console.log('Start: '+this.carId);
};

let vehicule = new Car(456);
vehicule.start(); */

// convert to JSON
/* let car={
    id:123,
    style:'Convertible'
};

console.log(JSON.stringify(car));

let jsonId=
`
    [
        {"carId":1},
        {"carId":2},
        {"carId":3}
    ]
`;

let carIds = JSON.parse(jsonId);
console.log(carIds); */

// Array iteration

/* let carIds=[
    {carId:1,style:'sedan'},
    {carId:2,style:'convertible'},
    {carId:3,style:'sedan'}
];
carIds.forEach(car=>console.log(car));
carIds.forEach((car,index)=>console.log(car,index));

let convertible = carIds.filter(
    car=>car.style==='convertible'
);
let result = carIds.every(
    car=>car.carId>0
);
let search = carIds.find(
    car=>car.carId>2
);
console.log(convertible);
console.log(result);
console.log(search); */

// Classes and Modules

/* class Car{
    constructor(id){
        this.id=id;
    }
    identify(suffix){
        return `Car Id : ${this.id} ${suffix}`;
    }
}

let car = new Car(123);
console.log(car.identify('!!!!')); */

// Inheritance
/* class Vehicule {
    constructor(){
        this.type='car';
    }
    start(){
        return `Starting: ${this.type}`;
    }
}

import {Car} from './models/car.js';
let car = new Car(123);
console.log(car.id); */

// Programminf the BOM and DOM
//console.log(innerWidth);
/* let timeoutId = setInterval(function(){
    console.log('1 second passed');
},1000);

clearTimeout(timeoutId); */

/* let el = document.getElementById('first');

el.style.color ='blue';
console.log(el); */


// Promise
/* let promise = new Promise(
    function(resolve, reject){
        setTimeout(resolve,100,'someValue');
});

promise.then(
    value=>console.log('fulfilled: '+value),
    error=>console.log('rejected: '+error)
); */
/* console.log(promise); */

// Data Access Using HTTP
// first : using XHR

/* let xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function(){
     if(this.readyState==4 && this.status==200){
         console.log(this.responseText);
     }
 };

 xhttp.open("GET","http://5dc584600bbd050014fb8acf.mockapi.io/api/jsV1/user",true);
 xhttp.send(); */

 // second : using JQuery GET & POST

 /* import $ from 'jquery';

 let promise = $.get("http://5dc584600bbd050014fb8acf.mockapi.io/api/jsV1/user");
 promise.then(
    data=>console.log('Success: ',data),
    error=>console.log('Error: ',error)
 );

 let user = {
     name:'mila',
     avatar:'mila.jpg'
 };

 let promise1 = $.post("http://5dc584600bbd050014fb8acf.mockapi.io/api/jsV1/user",user);
 promise1.then(
     data=>console.log("Success : ",data),
     error=>console.log('Error: ',error)
 ); */