import {add} from './maths.js';
import greet from './greet.js';

console.log(add(12,23));
console.log(multiply(89,3));
console.log(greet('John'));

//Object Destructuring
const person={
    name:'Archana',
    age:23,
    city:'bedok'
};
console.log(person.name);
const {name,age,city}=person;

console.log(age);