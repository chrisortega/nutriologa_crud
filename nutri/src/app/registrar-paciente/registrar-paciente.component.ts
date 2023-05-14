import { Component } from '@angular/core';
import {  OnInit, ChangeDetectorRef } from '@angular/core';
import { Paciente } from '../data/paciente';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-registrar-paciente',
  templateUrl: './registrar-paciente.component.html',
  styleUrls: ['./registrar-paciente.component.css']
})


export class RegistrarPacienteComponent {
   dia = 1
   anno = 1950
   mes = 'Enero'
   dias:Array<any> | undefined
   meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
   annos = Array.from({length: (new Date().getFullYear()) - 1950 + 1}, (_, i) => 1950 + i);
   genero:string  = "Mujer"
   name:string = ""
   registered:boolean = false
   

    constructor(private api:ApiService,    private changeDetection: ChangeDetectorRef  ){}

   modelChanged(event: any):any{      
    let daysInMonth = this.generate_days(this.dia, this.meses.indexOf(this.mes)+1);
    this.dias = Array.from({length: daysInMonth}, (_, i) => 1 + i);      
    this.changeDetection.detectChanges();    
   }

   registrar(){
    this.registered = true
    let paciente : Paciente = {
      name : this.name!,      
      nacimiento : new Date(this.anno+"-"+this.meses.indexOf(this.mes)+1+"-"+this.dia),
      desc : "",
      idi:0,
      foto:"1",
      genero: this.genero!

    }
    
    this.api.addPaciente(paciente)
   }
   
   generate_days(year:number,month:number){
    return new Date(year, month, 0).getDate();
   }

   ngOnInit(){    
      const daysInMonth = this.generate_days(this.dia, this.meses.indexOf(this.mes));
      this.dias = Array.from({length: daysInMonth}, (_, i) => 1 + i);      
   }
}
