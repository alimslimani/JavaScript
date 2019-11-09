"use strict";

/* import display from './display.js'; */

function display(){
    for(var i =0;i<arguments.length;i++){
        if(typeof arguments[i]==='object')
            displayObject(arguments[i]);
        else 
            displayValue(arguments[i,true]);
    }
}

function displayObject(object){
    displayValue(getTypeName(object)+' {');
    for(var propertyName in object){
        displayValue(propertyName+': '+object[propertyName],true,true);
    }
    displayValue('}',true);
}

function displayValue(value,addMargin,addPadding){
    var div = document.createElement('div');
    div.style.fontSize='32px';
    if(addMargin){
        div.style.marginBottom='30px';
    }
    if(addPadding){
        div.style.paddingLeft='30px';
    }
    div.innerText=value;
    document.body.appendChild(div);
}

function getTypeName(object){
    var funcNameRegex = /function(.{1,})\(/;
    var result = (funcNameRegex).exec(object.constructor.toString);
    return (result && result.length>1) ? result[1]:"";
}


/* var cat = 
    {
    name:'Fluffy',
    color:'white'
    }; */

/* var cat = 
{
    name:{first:'Fluffy', last:'Scratchy'},
    color:'white'
};
 */

    /* var cat = {
    name:'Fluffy',
    color:'white',
    speak: function(){display("Miaaaoou");}
};

cat.age = 3;

cat.speak(); */

// ## Using Object.create()

/* 
var cat = Object.create(Object.prototype,
    {
        name:{
            value:'Fluffy',
            enumerable:true,
            writable:true,
            configurable:true
        },
        color:{
            value:'white',
            enumerable:true,
            writable:true,
            configurable:true
        }
    });

display(cat);
 */

 //  Using JS Bracket Notation 

/* cat['Eye color']='Green';
 display(cat['Eye color']);

 console.log(cat['Eye color']); */

 //  Using JS Property 
/* 
 display(Object.getOwnPropertyDescriptor(cat,'name')); */

 // Using Writable, Enumerable & configurable Attribute

/*  Object.defineProperty(cat,'name',{writable:false});
 Object.freeze(cat.name);
 cat.name.first='Scratchy';
 display(cat.name);
 */

/* Object.defineProperty(cat,'name',{enumerable:false});

/*  for(var propertyName in cat){
     display(propertyName +': ' + cat[propertyName]);
 } */
/*  display(Object.keys(cat));
 display(JSON.stringify(cat));
 delete cat.name;
 console.log(Object.keys(cat)); */ 

 // Using Getter and Setter
/*  Object.defineProperty(cat,'fullName',
 {
     get:function(){
         return this.name.first+ ' '+this.name.last;
     },
     set:function(value){
         var namePart = value.split(' ');
         this.name.first= namePart[0];
         this.name.last=namePart[1];
     }
 });

 display(cat.fullName);

 cat.fullName='Hello Muff';
 display(cat.fullName);
  */


  // ## Prototypes 

/* var arr= new Array("Red","Green","White");
var arr2 = ["One","Two","Three"]; */

/* Object.defineProperty(Array.prototype,'last',{get:function(){
    return this[this.length-1];
}});
var last = arr.last;
display(Array); */


// What's a prototype 
/* var myFunc = function(){} ;
display(myFunc.prototype);
var cat= {name:'Flufly'};
display(cat.__proto__); */

/* function Cat(name, color){
    this.name =name,
    this.color=color
};
display(Cat.prototype); */

// Create own prototype
/* function Animal(voice){
    this.voice=voice || 'Grunt';
};

Animal.prototype.speak = function(){
    display(this.voice);
};

function Cat(name, color){
    Animal.call(this,'Meow');
    this.name = name,
    this.color = color;
};

Cat.prototype = Object.create(Animal.prototype);

var fluffy = new Cat('Fluffy','White');
fluffy.speak();
display(fluffy.__proto__); */


// Create own prototype with Class
class Animal{
    constructor(voice){
        this.voice= voice || 'Grunt';
    }
    speak(){
        display(this.voice);
    }
};



class Cat extends Animal{
    constructor(name,color){
        super("Meow");
        this.name =name;
        this.color = color;
    }
}

var fluffy = new Cat('Fluffy','White');
display(Object.keys(fluffy.__proto__));


