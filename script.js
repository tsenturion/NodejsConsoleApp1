"use strict";
function inputNumberArray() {
    const numbers = [];
    let input;
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
let numbers3 = inputNumberArray();
for (let index in numbers3) {
    console.log(index);
    let key = 'key' + index.toString();
    console.log(key);
}
//let len = numbers3.length;
//if (numbers3.length >= 4) {
//    let slice1: number[] = numbers3.slice(0, 2);
//    let slice2: number[] = numbers3.slice(len - 2, len);
//    console.log(slice1.concat(slice2));
//} else {
//    let slice1: number[] = numbers3.slice(0, 1);
//    let slice2: number[] = numbers3.slice(len - 1, len);
//    console.log(slice1.concat(slice2));
//}
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
