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

// npm install -g typescript
//tsc --watch
//let emptyArry: number[] = new Array<number>(1, 2, 3, 4, 5);

//function chessBoard(size: number): void {
//    for (let i: number = 0; i < size; i++) {
//        let row: string = '';
//        for (let j: number = 0; j < size; j++) {
//            row += (i + j) % 2 === 0 ? '0' : '1';
//        }
//        console.log(row);
//    }
//}

//chessBoard(100);
//let poww: number = Math.PI * Math.pow(2, 2);

//----------------массивы-------------------------------
//let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//console.log("Ёлементы массива:", numbers);
//console.log(numbers.length); //длина массива
//numbers.push(99, 99) //добавл€ет один или несколько элементов в конец
//console.log("Ёлементы массива:", numbers);
//let lastElem: number | undefined = numbers.pop(); // удал€ет последний элемент и возвращает его
//console.log(lastElem);
//let firstElem: number | undefined = numbers.shift(); // удал€ет первый элемент и возвращает его
//console.log(firstElem);
//console.log("Ёлементы массива:", numbers);
//numbers.unshift(99, 99); // добавл€ет один или несколько элементов в начало
//console.log("Ёлементы массива:", numbers);
//const numbers2: number[] = [55, 55, 55];
//const combined: number[] = numbers.concat(numbers2); // объедин€ет два и более масиивов и возвращает новый
//console.log("Ёлементы массива:", combined);
//const joined: string = numbers.join('-'); // все элементы в строку с раздедлителем
//console.log(joined);
//const slice: number[] = numbers.slice(1, 4); // срез элементов (начало, конец), возвращает новый массив
//console.log(slice);
//console.log("Ёлементы массива:", numbers);
//numbers.splice(2, 1, 6); // удал€ет или добавл€ет элементы. (Ќачало, количество, элементы)
//console.log("Ёлементы массива:", numbers);
//console.log(numbers.indexOf(99)); // находит первое вхождение
//console.log();
//console.log();

//---------------------объекты---------------------

const person: { [key: string]: any } = {
    name: 'иван',
    lastName: 'иванов',
    age: 25,
    isStudent: false
};

const values: { [key: string]: number } = {
    key1: 5,
    key2: 7,
    key3: 10
}
let copy = { ...values }; //копирование
console.log(copy); 
let merged = { ...person, ...copy }; //соединение
console.log(merged);
let stringKeys = Object.keys(values); // получение ключей - строка
let anyValues = Object.values(values); // получение значений
let enries = Object.entries(values);




let intKeys: number[] = [];
for (let q: number = 0; q < stringKeys.length; q++) {
    intKeys[q] = parseInt(stringKeys[q][3]);
}
console.log(intKeys);
//values["key4"] = 8;
//values["key4"] = 10;
//console.log(values["key4"]);
//console.log(values["key3"]);

//console.log('key3' in values);

//delete values.key3;
//console.log('key3' in values);
//for (let key in person) {
//    console.log(key);
//}
//for (let value of values) {
//    console.log(value);
//}

/*
использовать функцию дл€ ввода, создать массив
если в нем меньше 4 элементов, создать массив из 
первого и последнего элемента и вывести его
если в нем больше 4 элементов, создать массив из 
первых двух и последних двух элементов и вывести его
*/
process.stdin.resume();