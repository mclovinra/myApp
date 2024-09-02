import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})


export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor (public fb: FormBuilder, public alertController: AlertController, public navCtr: NavController) {

    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'contraseña': new FormControl("",Validators.required),
      'confirmarContraseña': new FormControl("",Validators.required)
    });

   }

  ngOnInit() {
  }

  async guardar() {

    var f = this.formularioRegistro.value;

    if (this.formularioRegistro.invalid) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Debe Rellenar Todos los Campos.',
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
