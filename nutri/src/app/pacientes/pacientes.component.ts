import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent {
pacientes:Array<any> = []

  constructor(private api:ApiService){}

  ngOnInit(){
    
   this.api.getPacientes().subscribe(data => 
    {
      console.log(data)
      this.pacientes = data
    })
  }
}
