/*
    My First App
    By Alim SLIMANI
*/

/*
let card1 = 'Ace of Spades',
    card2 = 'Ten of Hearts';
*/


// retreive the content of the element by ID : title of <H1> of html
let title = document.getElementById('title');
console.log(title);
//to modify the the content of element 
title.innerText = "Hello, it's my first Web-App with JavaScript";

let okButton = document.getElementById("ok-button");
okButton.addEventListener('click',function(){
    title.innerText="After click of button, I modified the Title";
});


let textArea = document.getElementById('text-area');
textArea.style.display='none';

let displayButton = document.getElementById("display-button");
okButton.addEventListener('click',function(){
    textArea.style.display='none';
});