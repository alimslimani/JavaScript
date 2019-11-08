function myFunction(){
    console.log("Hello, it's my first function!");
}

myFunction();

function functionWithInfo(message){
    console.log(message);
}

functionWithInfo("Hello, my second function!");

function functionWithTwoParams(message,number){
    message = message + " my third function";
    console.log(message,number);
}

functionWithTwoParams("Hello",45);

function triplePlus(value){
    let newValue  = value+value+value;
    return newValue;
}
let result = triplePlus(5);
console.log(result);