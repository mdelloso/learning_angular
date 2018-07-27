import { Component, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  subscriptions = ['Basic', 'Advanced', 'Pro'];
  formData = {
    email: '',
    subscription: '',
    password: ''
  };
  submitted = false;

  onSubmit(form: NgForm) {
    this.submitted = true;
    this.formData.email = form.value.email;
    this.formData.subscription = form.value.subscription;
    this.formData.password = form.value.password;
    // El reset no sólo resetea los valores, sino que también el estado de los controles (valid, touched, etc.)
    // Para resetear sólo los valores, se podría usar el método "setValue" visto más arriba en el método 'suggestUserName()'
    form.reset();
    form.form.patchValue({
      subscription: this.subscriptions[0]
    });
    console.log(this.formData);
  }
}
