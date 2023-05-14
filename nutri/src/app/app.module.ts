import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigComponent } from './navig/navig.component';
import { HttpClientModule } from '@angular/common/http';
import { PacientesComponent } from './pacientes/pacientes.component';
import { PacienteComponent } from './paciente/paciente.component';
import { CitasComponent } from './citas/citas.component';
import { DetallescitaComponent } from './detallescita/detallescita.component';
import { NgChartsModule } from 'ng2-charts';
import { AdminCitasComponent } from './admin-citas/admin-citas.component';
import { RegistrarPacienteComponent } from './registrar-paciente/registrar-paciente.component';
import { NuevacitaComponent } from './nuevacita/nuevacita.component';
import { RegistroComponent } from './registro/registro.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormField, MatHint } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigComponent,
    PacientesComponent,
    PacienteComponent,
    CitasComponent,
    DetallescitaComponent,
    AdminCitasComponent,
    RegistrarPacienteComponent,
    NuevacitaComponent,
    RegistroComponent,
    MensajesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
