function inputNumberArray(): number[] {
    const numbers: number[] = [];
    let input: string | null;

    do {
        input = prompt("������� ����� (��� ���������� ����� ������� ������ ������):");
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
������������ ������� ��� �����, ������� ������
���� � ��� ������ 4 ���������, ������� ������ �� 
������� � ���������� �������� � ������� ���
���� � ��� ������ 4 ���������, ������� ������ �� 
������ ���� � ��������� ���� ��������� � ������� ���
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
//console.log("�������� �������:", numbers);
//console.log(numbers.length); //����� �������
//numbers.push(99, 99) //��������� ���� ��� ��������� ��������� � �����
//console.log("�������� �������:", numbers);
//let lastElem: number | undefined = numbers.pop(); // ������� ��������� ������� � ���������� ���
//console.log(lastElem);
//let firstElem: number | undefined = numbers.shift(); // ������� ������ ������� � ���������� ���
//console.log(firstElem);
//console.log("�������� �������:", numbers);
//numbers.unshift(99, 99); // ��������� ���� ��� ��������� ��������� � ������
//console.log("�������� �������:", numbers);
//const numbers2: number[] = [55, 55, 55];
//const combined: number[] = numbers.concat(numbers2); // ���������� ��� � ����� �������� � ���������� �����
//console.log("�������� �������:", combined);
//const joined: string = numbers.join('-'); // ��� �������� � ������ � �������������
//console.log(joined);
//const slice: number[] = numbers.slice(1, 4); // ���� ��������� (������, �����), ���������� ����� ������
//console.log(slice);
//console.log("�������� �������:", numbers);
//numbers.splice(2, 1, 6); // ������� ��� ��������� ��������. (������, ����������, ��������)
//console.log("�������� �������:", numbers);
//console.log();

