import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [FormsModule]
})
export class AppModule {}

<form #formRef="ngForm">
  <input name="username" [(ngModel)]="username" required>
  <button [disabled]="formRef.invalid">Отправить</button>
</form>

export class AppComponent {
  username: string = '';
}

<form #formRef="ngForm" (ngSubmit)="onSubmit(formRef)">
  <input name="username" [(ngModel)]="username" required>
  <button type="submit">Отправить</button>
</form>

onSubmit(form: any) {
  console.log(form.value);
}


import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [ReactiveFormsModule]
})
export class AppModule {}

import { FormGroup, FormControl, Validators } from '@angular/forms';

export class AppComponent {
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });
}

<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <input formControlName="username">
  <input formControlName="email">
  <button [disabled]="form.invalid">Отправить</button>
</form>

onSubmit() {
  console.log(this.form.value);
}

username: new FormControl('', [
  Validators.required,
  Validators.minLength(3)
])

<input formControlName="username">
<div *ngIf="form.get('username')?.invalid && form.get('username')?.touched">
  Ошибка в поле username
</div>

import { AbstractControl } from '@angular/forms';

export function forbiddenName(control: AbstractControl) {
  return control.value === 'admin' ? { forbidden: true } : null;
}

username: new FormControl('', [
  Validators.required,
  forbiddenName
])


import { FormBuilder } from '@angular/forms';

constructor(private fb: FormBuilder) {}

form = this.fb.group({
  username: ['', Validators.required],
  email: ['', Validators.email]
});

this.form.addControl('age', new FormControl(''));

this.form.valueChanges.subscribe(value => {
  console.log(value);
});