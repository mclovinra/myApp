import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InicioPageRoutingModule } from './inicio-routing.module';
import { MatCardModule } from '@angular/material/card';
import { InicioPage } from './inicio.page';  // Importa el componente standalone

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    MatCardModule,
    InicioPage  // Importa el componente standalone aquí
  ]
})
export class InicioPageModule {}