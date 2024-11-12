//import { randomInt } from "crypto";

////npm install random-nubmer-csprng
////await randomNumber(min, max)
////function greet(name: string): string {
////    return 'hello, ${name}';
////}

////greet("world");
////console.log('Hello world');
////let secondName: string = "efimov";
////let name2: string = 'matvey';
////let name3: string = 'mikita';
////let age: number = 23;
////let upFlag: boolean = true;
////let downFlag: boolean = false;
////age = 10 % 4; // 2
////age = age ** 4; // 2 ^ 4 = 16
/////*
////>
////<
////>=
////<=
////===
////!==

////*/
////age = 14;


////let maximumDataTransferSpeed: number = 23;  // 1
////let dayOfWeek: string = "monday";  // 2
////let result: number = 2 + 6 / (1 + 2);  // 3
////console.log(result);
////if (upFlag) {
////    console.log(upFlag);
////} else {
////    console.log('тест русского');
////}
////import * as readline from "readline";

////const r1 = readline.createInterface({
////    input: process.stdin,
////    output: process.stdout
////});
////let name4: string = '5';
////r1.question('33', (name: string) => {
////    name4 = name;
////    console.log(name4);
////    r1.close();
////});
////console.log('23', name4);
////process.stdin.resume();
////let day: number = 3;
////switch (day) {
////    case 1:
////    case 3:
////    case 2:
////        console.log('1/3/2');
////        break;
////    case 4:
////        console.log('4');
////        break;
////}

////loop1: for (let i: number = 0, j: number = 0; i < 10; i+=2, j++) {
////    console.log(i, j);
////}
////let i: number = 11;
////while (i < 10) {
////    console.log(i);

////    i++;
////}
////do {
////    console.log(i);
////    console.log(i < 10);

////} while (i < 10);
////let arr: number[] = [1, 2, 3, 4, 5, 6, 7];
////for (let i of arr) {
////    console.log(i);
////}
////console.log('\n');
////for (let i in arr) {
////    console.log(i);
////}
////console.log('\n');
////let obj: { [key: string]: number } = { a: 1, b: 2, c: 30 };
////for (let key in obj) {
////    console.log(obj[key]);
////}


//tsc --watch
let arr: number[] = [1, 2, 3, 4, 5, 6, 7];
let emptyArry: number[] = new Array<number>(1, 2, 3, 4, 5);

function chessBoard(size: number): void {
    for (let i: number = 0; i < size; i++) {
        let row: string = '';
        for (let j: number = 0; j < size; j++) {
            row += (i + j) % 2 === 0 ? '0' : '1';
        }
        console.log(row);
    }
}

chessBoard(100);
process.stdin.resume();