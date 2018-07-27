import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Acceder a la LocalReference directamente sin pasarla a un método.
  // Esto es útil si se quiere acceder al Formulario antes de hacer el submit.
  @ViewChild('myForm') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // Esta opción te carga todo el formulario. No es lo mejor porque si ya hay otros campos cargados, los borra.
    /*
    this.signupForm.setValue({
      userData: {
        username: suggestedName,
        email: ''
      },
      secret: 'pet',
      questionAnswer: '',
      gender: 'male'
    });
    */
   // PatchValue permite sobreescribir partes del formulario sin tener que tocar otras.
   this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    this.user.username = form.value.userData.username;
    this.user.email = form.value.userData.email;
    this.user.secretQuestion = form.value.secret;
    this.user.answer = form.value.questionAnswer;
    this.user.gender = form.value.gender;
    // El reset no sólo resetea los valores, sino que también el estado de los controles (valid, touched, etc.)
    // Para resetear sólo los valores, se podría usar el método "setValue" visto más arriba en el método 'suggestUserName()'
    form.reset();
    console.log(form);
    console.log(this.user);
  }

  /* Otra forma de acceder al formulario */
  onSubmit2() {
    console.log(this.signupForm);
  }
}
