// Simple object
let person = {
    name:"John",
    age:25,
    parTime : false
};

console.log(person.name);
console.log(person.age);
console.log(person.parTime);

function changePersonName(person){
    person.name="Mila";
}

changePersonName(person);
console.log(person.name);
console.log(person.age);
console.log(person.parTime);


// Array of Object

let people = [
    {
        name:"Mila",
        age:31
    },
    {
        name:"Betta",
        age:29
    }
];

console.log(people);
console.log(people[0].name);
console.log(people[1].age);