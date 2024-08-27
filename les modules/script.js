import { hello, sum } from "./array.js";
// On peut aussi écrire import { sum as somme } from "./array.js";
// console.log(somme([12, 23 ,19]))

// avec default
// import bonjour from "./bonjour.js";
import bonjour from "./bonjour.js";

console.log(sum([12, 23, 19]))
console.log(hello)
console.log(bonjour())
