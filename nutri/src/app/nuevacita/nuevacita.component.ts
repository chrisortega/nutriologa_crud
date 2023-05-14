import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Paciente } from '../data/paciente';
import { ApiService } from '../services/api.service';



@Component({
  selector: 'app-nuevacita',
  templateUrl: './nuevacita.component.html',
  styleUrls: ['./nuevacita.component.css']
})
export class NuevacitaComponent {

idi:number | undefined
pacientes:Paciente[] = []
horarios:String[] = [
  '8:00',
  '9:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00'
]
constructor(private route: ActivatedRoute,private api:ApiService) {}
ngOnInit(){

        this.route.queryParams
        .subscribe(params => {
          console.log(params); // { orderby: "price" }
          this.idi = params['paciente_id']    
                
        }
      );

        this.api.getPacientes().subscribe(data =>
          {
            console.log(data)
            this.pacientes = data
          })
}
  
}
