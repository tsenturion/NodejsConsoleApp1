console.log('Hello world');
let secondName: string = "efimov";
let name2: string = 'matvey';
let name3: string = 'mikita';
let age: number = 23;
let upFlag: boolean = true;
let downFlag: boolean = false;
age = 10 % 4; // 2
age = age ** 4; // 2 ^ 4 = 16
/*
>
<
>=
<=
===
!==

*/
age = 14;


let maximumDataTransferSpeed: number = 23;  // 1
let dayOfWeek: string = "monday";  // 2
let result: number = 2 + 6 / (1 + 2);  // 3
console.log(result);
if (upFlag) {
    console.log(upFlag);
} else {
    console.log('тест русского');
}
import * as readline from "readline";

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let name4: string = '5';
r1.question('33', (name: string) => {
    name4 = name;
    console.log(name4);
    r1.close();
});
console.log('23', name4);
process.stdin.resume();