class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getPrice(): number {
    return this.price;
  }
}


const product = new Product("Телефон", 500);


class Example {
  public name: string;
  private secret: string;
  protected value: number;

  constructor() {
    this.name = "public";
    this.secret = "private";
    this.value = 42;
  }
}


function Log(target: any) {
  console.log("Класс создан:", target);
}

@Log
class TestClass {}


function sum(a: number, b: number): number {
  return a + b;
}


const multiply = (a: number, b: number): number => {
  return a * b;
};


let data: any = 10;
data = "строка";
data = true;


let value: unknown = "текст";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}


let id: number | string;

id = 10;
id = "ABC";


function identity<T>(value: T): T {
  return value;
}

identity<number>(10);
identity<string>("текст");


export class User {}

import { User } from './user';