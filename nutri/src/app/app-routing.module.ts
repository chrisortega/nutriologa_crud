import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientesComponent } from './pacientes/pacientes.component';
import { HomeComponent } from './home/home.component';
import { PacienteComponent } from './paciente/paciente.component';
import { DetallescitaComponent } from './detallescita/detallescita.component';
import { RegistrarPacienteComponent } from './registrar-paciente/registrar-paciente.component';
import { NuevacitaComponent } from './nuevacita/nuevacita.component';


const routes: Routes = [
  
  { path: 'detallecita', component: DetallescitaComponent },
  { path: 'nuevacita', component: NuevacitaComponent },
  { path: 'pacientes', component: PacientesComponent },
  { path: 'paciente', component: PacienteComponent },
  { path: 'registrar', component: RegistrarPacienteComponent },
  
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
