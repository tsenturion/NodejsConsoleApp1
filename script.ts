function inputNumberArray(): number[] {
    const numbers: number[] = [];
    let input: string | null;

    do {
        input = prompt("¬ведите число (дл€ завершени€ ввода введите пустую строку):");
        if (input && input.trim() !== "") {
            const num = parseFloat(input.trim());
            if (!isNaN(num)) {
                numbers.push(num);
            }
        }
    } while (input && input.trim() !== "");

    return numbers;
}
const keyNumber: { [key: string]: number } = {};
let numbers3: number[] = inputNumberArray();
for (let index in numbers3) {
    keyNumber['key' + index.toString()] = numbers3[index];
}
//console.log(numbers3)
//const KeyNumber: { [key: string]: number } = {};

//for (let i = 0; i < numbers3.length; i++) {
//    KeyNumber["key" + i.toString()] = numbers3[i]
//}
//console.log(KeyNumber)


/*
использовать функцию дл€ ввода, создать массив
если в нем меньше 4 элементов, создать массив из 
первого и последнего элемента и вывести его
если в нем больше 4 элементов, создать массив из 
первых двух и последних двух элементов и вывести его
*/
//https://github.com/tsenturion/NodejsConsoleApp1
let len = numbers3.length;
if (numbers3.length >= 4) {
    let slice1: number[] = numbers3.slice(0, 2);
    let slice2: number[] = numbers3.slice(len - 2, len);
    console.log(slice1.concat(slice2));
} else {
    let slice1: number[] = numbers3.slice(0, 1);
    let slice2: number[] = numbers3.slice(len - 1, len);
    console.log(slice1.concat(slice2));
}
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
//console.log();

