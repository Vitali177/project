'use strict';


let arr = ['a', 'b', 'c'];
console.log(arr[0]);
//alert('Hello world');
 let answer =  prompt("Есть ли вам 18?", "Да");

 console.log(typeof(arr));

 function first() {
    setTimeout( function() {
         console.log(1);
    }, 500);
 }

 function second() {
     console.log(2);
 }

 first();
 second();

 function learnJS(lang, callback) {
     console.log("Я учу " + lang);
     callback();
 }

 function done() {
    console.log("Я прошел 3й урок")
 }

 learnJS("JavaScript", done);

 console.log("TEST");