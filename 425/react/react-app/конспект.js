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