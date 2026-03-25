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


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent], 
  imports: [BrowserModule],     
  providers: [],                
  bootstrap: [AppComponent]     
})
export class AppModule {}


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{ title }}</h1>`,
  styles: [`h1 { color: blue; }`]
})
export class AppComponent {
  title: string = 'Angular приложение';
}


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getData(): string {
    return 'Данные из сервиса';
  }
}


import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  template: `<p>{{ data }}</p>`
})
export class AppComponent {
  data: string;

  constructor(private dataService: DataService) {
    this.data = this.dataService.getData();
  }
}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<p>Тест</p>`
})
export class TestComponent implements OnInit {
  ngOnInit(): void {
    console.log('Компонент инициализирован');
  }
}


<p>{{ 2 + 2 }}</p>
<p>{{ name.toUpperCase() }}</p>


<p *ngIf="isVisible">Текст отображается</p>
export class AppComponent {
  isVisible: boolean = true;
}


<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>
export class AppComponent {
  items: string[] = ['Angular', 'React', 'Vue'];
}


<input #inputRef>
<button (click)="logValue(inputRef.value)">Показать</button>
export class AppComponent {
  logValue(value: string): void {
    console.log(value);
  }
}


<p>{{ price | currency }}</p>
<p>{{ date | date }}</p>


export class AppComponent {
  count: number = 0;

  increment(): void {
    this.count++;
  }
}
<button (click)="increment()">+</button>
<p>{{ count }}</p>


<div [class.active]="isActive"></div>
<div [style.color]="textColor"></div>
export class AppComponent {
  isActive: boolean = true;
  textColor: string = 'red';
}


<p *ngIf="isVisible; else elseBlock">Основной текст</p>

<ng-template #elseBlock>
  <p>Альтернативный текст</p>
</ng-template>


<li *ngFor="let item of items; trackBy: trackByFn">
  {{ item }}
</li>
trackByFn(index: number, item: string): number {
  return index;
}


<div [ngStyle]="{ color: textColor, fontSize: '20px' }"></div>
export class AppComponent {
  textColor: string = 'red';
}


import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
}
<p appHighlight>Подсвеченный текст</p>


import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.color = 'blue';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.color = 'black';
  }
}
<p appHover>Наведи курсор</p>


import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  @Input() appColor: string = '';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.color = this.appColor;
  }
}
<p [appColor]="'green'">Зелёный текст</p>


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getData(): string {
    return 'Данные из сервиса';
  }
}


import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  template: `<p>{{ data }}</p>`
})
export class AppComponent {
  data: string;

  constructor(private dataService: DataService) {
    this.data = this.dataService.getData();
  }
}


const service = new DataService();


providedIn: 'root'
@NgModule({
  providers: [DataService]
})
export class AppModule {}
@Component({
  selector: 'app-root',
  providers: [DataService],
  template: `...`
})


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: string[] = ['Иван', 'Анна'];

  getUsers(): string[] {
    return this.users;
  }

  addUser(name: string): void {
    this.users.push(name);
  }
}
export class AppComponent {
  users: string[] = [];

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }

  addUser() {
    this.userService.addUser('Новый пользователь');
  }
}


import { InjectionToken } from '@angular/core';

export const API_URL = new InjectionToken<string>('apiUrl');
providers: [
  { provide: API_URL, useValue: 'https://api.example.com' }
]
import { Inject } from '@angular/core';

constructor(@Inject(API_URL) private apiUrl: string) {}


providers: [
  { provide: DataService, useClass: MockDataService }
]