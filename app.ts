//npm install -g ts-node http-server
//function greet(name: string): string {
//    return 'hello, ${name}';
//}

//document.body.innerHTML = greet("world");
//console.log('Hello world');
//let secondName: string = "efimov";
//let name2: string = 'matvey';
//let name3: string = 'mikita';
//let age: number = 23;
//let upFlag: boolean = true;
//let downFlag: boolean = false;
//age = 10 % 4; // 2
//age = age ** 4; // 2 ^ 4 = 16
///*
//>
//<
//>=
//<=
//===
//!==

//*/
//age = 14;


//let maximumDataTransferSpeed: number = 23;  // 1
//let dayOfWeek: string = "monday";  // 2
//let result: number = 2 + 6 / (1 + 2);  // 3
//console.log(result);
//if (upFlag) {
//    console.log(upFlag);
//} else {
//    console.log('тест русского');
//}
//import * as readline from "readline";

//const r1 = readline.createInterface({
//    input: process.stdin,
//    output: process.stdout
//});
//let name4: string = '5';
//r1.question('33', (name: string) => {
//    name4 = name;
//    console.log(name4);
//    r1.close();
//});
//console.log('23', name4);
//process.stdin.resume();
//let day: number = 3;
//switch (day) {
//    case 1:
//    case 3:
//    case 2:
//        console.log('1/3/2');
//        break;
//    case 4:
//        console.log('4');
//        break;
//}

//loop1: for (let i: number = 0, j: number = 0; i < 10; i++, j++) {
//    console.log(i, j);
//}
//let i: number = 11;
//while (i < 10) {
//    console.log(i);

//    i++;
//}
//do {
//    console.log(i);
//    console.log(i < 10);

//} while (i < 10);
let arr: number[] = [1, 2, 3, 4, 5, 6, 7];
for (let i of arr) {
    console.log(i);
}
console.log('\n');
for (let i in arr) {
    console.log(i);
}
console.log('\n');
let obj: { [key: string]: number } = { a: 1, b: 2, c: 30 };
for (let key in obj) {
    console.log(obj[key]);
}



process.stdin.resume();