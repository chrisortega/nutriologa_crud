import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Paciente } from '../data/paciente';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent {
  paciente : Paciente  = {
    name: "",
    nacimiento: new Date(),
    desc: "",
    idi:0,
    foto:"",
    genero:""

  }

  idi:string | null | undefined
  name:string  = "Juan Perez"
    constructor(
      private route: ActivatedRoute,
      private api: ApiService
    ) {}

    
    ngOnInit() {
      
      this.route.queryParams
        .subscribe(params => {
          
          this.idi = params['id']    
          this.api.getPaciente(Number(this.idi)).subscribe(data=>{
            this.paciente = data[0]
            console.log(this.paciente)
          })
        }
      );
    }
}
