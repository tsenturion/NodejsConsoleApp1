import { Observable } from 'rxjs';

const observable = new Observable(observer => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
});

observable.subscribe({
  next: value => console.log(value),
  error: err => console.error(err),
  complete: () => console.log('Завершено')
});


import { map } from 'rxjs/operators';

observable.pipe(
  map(value => value * 2)
).subscribe(result => console.log(result));

import { filter } from 'rxjs/operators';

observable.pipe(
  filter(value => value > 1)
).subscribe(result => console.log(result));

import { switchMap } from 'rxjs/operators';

source$.pipe(
  switchMap(value => this.http.get(`/api/${value}`))
).subscribe(data => console.log(data));


import { Subject } from 'rxjs';

const subject = new Subject<number>();

subject.subscribe(value => console.log('A:', value));
subject.subscribe(value => console.log('B:', value));

subject.next(1);
subject.next(2);

import { BehaviorSubject } from 'rxjs';

const subject = new BehaviorSubject<number>(0);

subject.subscribe(value => console.log(value));
subject.next(1);

const subscription = observable.subscribe();

subscription.unsubscribe();

<p>{{ data$ | async }}</p>

import { debounceTime } from 'rxjs/operators';

input$.pipe(
  debounceTime(300)
).subscribe(value => console.log(value));

import { distinctUntilChanged } from 'rxjs/operators';

observable.pipe(
  distinctUntilChanged()
).subscribe();


this.form.valueChanges.pipe(
  debounceTime(300),
  distinctUntilChanged()
).subscribe(value => {
  console.log(value);
});


//ошибка 
this.http.get('/api').subscribe(data => {
  this.http.get('/api2').subscribe(result => {
    console.log(result);
  });
});

this.http.get('/api').pipe(
  switchMap(() => this.http.get('/api2'))
).subscribe(result => console.log(result));