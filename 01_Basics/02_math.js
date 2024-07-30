const score = 100;
console.log(score);

const balance = new Number(200);
console.log(balance.toString());

console.log(Math.random());
/* to obtain value between 1 to 10 , we add 1 to obtain the values from one
console.log((Math.random()*10)+1);
console.log("Returns x, rounded downwards to the nearest integer",Math.floor(Math.random()*10)+1);

const min =10;
const max = 20;  
console.log(Math.floor(Math.random()* (max-min +1))+min); 

//convert to higher value
console.log(Math.round(3.66));
// convert to lower value 
console.log(Math.floor(3.66));
//convert to max/higher value 
console.log(Math.ceil(3.66));
//return integer part
console.log(Math.trunc(3.676));
console.log(Math.trunc(-3.66));
*/
// return 1 if positive number and -1 if negative 
console.log(Math.sign(3.66));
console.log(Math.sign(3));
console.log(Math.sign(-3));

console.log("give power 8^2",Math.pow(8,2));

console.log("gives square of the given number",Math.sqrt(25));

console.log("return positive value",Math.abs(-4.65));
console.log("Returns the mininmum of given values -->",Math.min(2,34,5,67,8));
console.log("Returns the max of given values -->",Math.max(2,34,5,67,8));
