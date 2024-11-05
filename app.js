"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Hello world');
let secondName = "efimov";
let name2 = 'matvey';
let name3 = 'mikita';
let age = 23;
let upFlag = true;
let downFlag = false;
age = 10 % 4; // 2
age = Math.pow(age, 4); // 2 ^ 4 = 16
/*
>
<
>=
<=
===
!==

*/
age = 14;
let maximumDataTransferSpeed = 23; // 1
let dayOfWeek = "monday"; // 2
let result = 2 + 6 / (1 + 2); // 3
console.log('12 %d', result);
if (upFlag) {
    console.log(upFlag);
}
else {
    console.log('���� ��������');
}
const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let name4 = '5';
r1.question('33', (name) => {
    name4 = name;
    console.log(name4);
    r1.close();
});
console.log('23', name4);
process.stdin.resume();
process.stdin.resume();
//# sourceMappingURL=app.js.map