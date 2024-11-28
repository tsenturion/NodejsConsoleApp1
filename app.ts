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

//const person: { [key: string]: any } = {
//    name: 'иван',
//    lastName: 'иванов',
//    age: 25,
//    isStudent: false
//};

//const values: { [key: string]: number } = {
//    key1: 5,
//    key2: 7,
//    key3: 10
//}
//let copy = { ...values }; //копирование
//console.log(copy);
//let merged = { ...person, ...copy }; //соединение
//console.log(merged);
//let stringKeys = Object.keys(values); // получение ключей - строка
//let anyValues = Object.values(values); // получение значений
//let enries = Object.entries(values);




//let intKeys: number[] = [];
//for (let q: number = 0; q < stringKeys.length; q++) {
//    intKeys[q] = parseInt(stringKeys[q][3]);
//}
//console.log(intKeys);

//const numbers = [1, 3, 8, 9, 100, 23, 55, 34];

//// BEGIN (write your solution here)
//const getEvenNumbers = (numbers2: number[]): number[] => numbers2.filter(i => i % 2 === 0);
//let num2: number[] = getEvenNumbers(numbers);
//console.log(num2);



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
//---------------------классы---------------------
//class Person {
//    name: string;
//    age: number;
//    constructor(name: string, age: number) {
//        this.name = name;
//        this.age = age;
//    }

//    greet(): void {
//        console.log(`age: ${this.age}`);
//    }
//}
//---------------------ќќѕ---------------------
//---------------------наследование---------------------
//class Employee extends Person {
//    position: string;
//    constructor(name: string, age: number, position: string) {
//        super(name, age);
//        this.position = position;
//    }

//    work(): void {
//        console.log(`position: ${this.position}`);
//    }
//}
//---------------------инкапул€ци€---------------------
// public - по умолчанию, доступно везде
// private - только внутри класса
//// protected - внутри класса и подклассов
//class Person {
//    name: string;
//    age: number;
//    constructor(name: string, age: number) {
//        this.name = name;
//        this.age = age;
//    }

//    protected greet(): void {
//        console.log(`age: ${this.age}`);
//    }
//}
//class Employee extends Person {
//    position: string;
//    constructor(name: string, age: number, position: string) {
//        super(name, age);
//        this.position = position;
//    }

//    work(): void {
//        console.log(`position: ${this.position}`);
//        this.greet()
//    }
//}
////---------------------абстрактные классы---------------------
//abstract class Animal {
//    name: string;
//    constructor(name: string) {
//        this.name = name;
//    }
//    abstract makeSound(): void;
//}

//class Dog extends Animal {
//    makeSound(): void {
//        console.log('1');
//    }
//}
////---------------------статические члены класса---------------------
//class MathUtils {
//    static PI: number = Math.PI;
//    //static PI: number = 3.14;
//    static square(x: number): number {
//        return x * x;
//    }
//}

//
//const employee = new Employee('12', 12, 'smm');
//employee.age = 13;
//employee.work();

//console.log(MathUtils.square(MathUtils.PI));

let age: number = 12;
age = 14;
let flag1: boolean = false;
let flag2: boolean = true;
let str1: string = '12';
const person2: { [key: string]: any } = {
    name: 'иван',
    lastName: 'иванов',
    age: 25,
    isStudent: false
};
let cat: { [key: string]: string } = {
    name: 'вас€',
    color: 'black'
};

let numArray: number[] = [1, 2, 3, 4, 5, 7];
//console.log(numArray[0]);
//console.log(numArray[1]);
//console.log(numArray[2]);

//loop1: for (let i: number = 0; i < numArray.length; i++) {
//    loop2: for (let j: number = 0; j < numArray.length; j++) {
//        console.log(numArray[j]);
//        if (j > 5) {
//            console.log(j, 'stop');
//            break loop1;
//        }
//    }
//}
// break - останавливает цикл в котором находитс€ полностью
// continue - останавливает текущую итерацию
/*let i: number = 0;*/
//while (true) {
//    console.log('cycle work');
//    if (i > 100) {
//        console.log(i);
//        break;
//    }
//    i++;
//}
//for (let num in person2) {
//    console.log(num);
//}
//console.log('done');
//for (let num of person2) {
//    console.log(num);
//}
//let i: number = 0;
//do {
//    console.log('cycle work');
//    i++;
//} while (i < 100);
//console.log('done');

function customSum(a: number, b: number): void {
    console.log(a + b);
}
function returnSum(a: number, b: number): number {
    return a + b;
}

//customSum(4, 5);
//console.log(returnSum(5, 6));
//let summ: number = returnSum(5, 6);
//summ = returnSum(5, 6);
//let str2: string = "12";

//abba
//['a', 'b', 'b', 'a']
//abba
// BEGIN (write your solution here)
function filterAnagrams(base: string, strs: string[]): string[] {
    let result: string[] = [];
    let getBase: string = base.split('').sort().join('');
    for (let str of strs) {
        if (str.split('').sort().join('') === getBase) {
            result.push(str);
        }
    }
    return result;
}
// END


enum Direction {
    Up = 0,
    Down = "DOWN",
    Left = "LEFT",
    Right = 'RIGHT'
}

let direction: Direction = Direction.Left;
enum ModalStatus {
    Opened,
    Closed
}
function buildModal(str: string, status: ModalStatus): { text: string, status: ModalStatus } {
    return { text: str, status: status };
}

type Name = string;
type Age = number;
type Numbers = number[];

type Person = {
    name: string;
    age: number;
};

let sdfdf: Name = 'eew';
let edeed: Object = buildModal(sdfdf, ModalStatus.Closed);


process.stdin.resume();