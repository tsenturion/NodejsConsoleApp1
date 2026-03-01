console.log('Hello, world!');

let age = 30;
console.log('Age:', age);

age = 31;
console.log('Updated Age:', age);

const name = 'John';
//name = 'Doe'; // This will cause an error because 'name' is a constant
console.log('Name:', name);

const user = {
    name: 'Alice',
    age: 25
};

user.age = 26; // This is allowed because 'user' is mutable
console.log('Updated User:', user);

/*
number
string
boolean
null
undefined
symbol
bigint
*/

let price = 19.99;
let count = 10;

let message = 'The price is ' + price + ' and the count is ' + count;
let result = `The price is ${price} and the count is ${count}`;

let isAvailable = true;
let isOutOfStock = false;

let data;
let result2 = null;

/*
+
-
*
/
%

>
<
>=
<=
==
!=
===
!==

&&
||
!
*/
console.log(5 == '5'); // true
console.log(5 === '5'); // false

let a;
console.log(a); // undefined

//const b; // SyntaxError: Missing initializer in const declaration

const c = 10;

console.log("5" - 2); // 3
console.log("5" + 2); // "52"

console.log(Number("5")); // 5
console.log(String(5)); // "5"
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true