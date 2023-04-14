// function greeting(){
//     alert("Hello World");
// }
// greeting();

//let announcement = function(){
   // alert ("You are learning Javascript syntax")
//}
//announcement();

// let cubeThis = function(someNumber){
//     document.getElementById("output").innerHTML = 
//     someNumber * someNumber * someNumber;
// }
// cubeThis(9);
// let rectangleArea = function(lenghtX, widthX){
//     let area = lengthX * widthX;
//     document.getElementById("output").innerHTML = area;
// }
let rectangleArea = ( lenght, width) => lenght * width;

let greeting = () =>"Hello world";
console.log(greeting());

let length = prompt("Length?");
let width = prompt("Width?");
document.getElementById("output").innerHTML = 
rectangleArea(length.width);