import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, public navCtr: NavController) {

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'contraseña': new FormControl("",Validators.required)
    });

   }

  ngOnInit() {
  }

  async ingresar(){

    var f = this.formularioLogin.value;

    const usuario = JSON.parse(localStorage.getItem('usuario') ?? '{}');

    if(usuario.nombre == f.nombre && usuario.contraseña == f.contraseña){
      console.log('Ingresado');
      localStorage.setItem('ingresado','true');
      this.navCtr.navigateRoot('inicio');
    }else{
      const alert = await this.alertController.create({
        header: 'Datos Incorrectos',
        message: 'Los Datos son Incorrectos',
        buttons: ['Aceptar'],
      });
  
      await alert.present();
      return;
    }
  }

}
