import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})


export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor (public fb: FormBuilder, public alertController: AlertController, public navCtr: NavController) {

    this.formularioRegistro = this.fb.group({
      password: ['', [Validators.required, passwordFormatValidator()]],
      confirmPassword: ['', Validators.required]
    }, { validator: passwordMatchValidator('password', 'confirmPassword') });

   }

  ngOnInit() {
  }

  async guardar() {

    var f = this.formularioRegistro.value;

    if (this.formularioRegistro.invalid) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Favor de Seguir los Requisitos.',
        buttons: ['Aceptar'],
      });
  
      await alert.present();
      return;

    }

    var usuario = {
      nombre: f.nombre,
      contraseña: f.contraseña,
    }
    
    localStorage.setItem('usuario',JSON.stringify(usuario));
    localStorage.setItem('ingresado','true');
    this.navCtr.navigateRoot('login');

  }
}

export function passwordMatchValidator(password: string, confirmPassword: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const passwordControl = control.get(password);
    const confirmPasswordControl = control.get(confirmPassword);

    if (!passwordControl || !confirmPasswordControl) {
      return null;
    }

    const isMatching = passwordControl.value === confirmPasswordControl.value;

    return isMatching ? null : { passwordsMismatch: true };
  };
}

export function passwordFormatValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.value;
    if (!password) {
      return null;
    }

    const hasFourNumbers = /^(?=(?:\D*\d){4})/.test(password);
    const hasThreeCharacters = /^(?=(?:[^a-zA-Z]*[a-zA-Z]){3})/.test(password);
    const hasOneUppercase = /^(?=(?:[^A-Z]*[A-Z]){1})/.test(password);

    const isValid = hasFourNumbers && hasThreeCharacters && hasOneUppercase;

    return isValid ? null : { passwordInvalidFormat: true };
  };
}