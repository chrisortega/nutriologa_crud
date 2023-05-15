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


idi:number  = 0 
paciente:Paciente | undefined
pacientes:Paciente[] = []
citas:Array<any> = []
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
citasPaciente:Array<any> = []

constructor(private route: ActivatedRoute,private api:ApiService) {}

currentDate = new Date()

buscaPaciente(){
    // for-of loop to iterate through the array
    for (let num of this.pacientes) {
      // if searchElement matches to the current element, print the index
      
      if (num.idi ===  Number(this.idi) ) {
         this.paciente  = num
      }
      
      
   }
}
checkCitas(){
  


 
this.buscaPaciente()

  this.api.getCitasPaciente(this.idi).subscribe(data=>{
    this.citasPaciente = data
  })
}

converCitaDate(fecha: any): Date{
  return new Date(fecha)
}
ngOnInit(){

        this.route.queryParams
        .subscribe(params => {
          console.log(params); // { orderby: "price" }
          this.idi = params['paciente_id']    
          
          
        }
      );
        
      this.api.getCitas().subscribe(data=>this.citas = data)
        this.api.getPacientes().subscribe(data =>
          {
            
            this.pacientes = data
            this.buscaPaciente()
          })
          

        
}
  
}
