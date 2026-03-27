<p>{{ name | uppercase }}</p>
export class AppComponent {
  name: string = 'angular';
}

<p>{{ name | lowercase }}</p>
<p>{{ name | titlecase }}</p>
<p>{{ 1234.567 | number:'1.2-2' }}</p>
<p>{{ price | currency }}</p>
price: number = 1000;
<p>{{ price | currency:'USD':'symbol' }}</p>

<p>{{ today | date }}</p>
today: Date = new Date();
<p>{{ today | date:'dd.MM.yyyy' }}</p>

<pre>{{ user | json }}</pre>

<p>{{ data$ | async }}</p>

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}

<p>{{ 'Angular' | reverse }}</p>


transform(value: string, uppercase: boolean): string {
  let result = value.split('').reverse().join('');
  return uppercase ? result.toUpperCase() : result;
}
<p>{{ 'Angular' | reverse:true }}</p>

@Pipe({
  name: 'example',
  pure: true
})

@Pipe({
  name: 'example',
  pure: false
})

//ошибка
<p>{{ getData() }}</p>


<p>{{ name | lowercase | titlecase }}</p>