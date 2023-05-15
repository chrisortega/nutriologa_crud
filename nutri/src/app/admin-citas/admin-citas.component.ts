import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { HelpersService } from '../services/helpers.service';

@Component({
  selector: 'app-admin-citas',
  templateUrl: './admin-citas.component.html',
  styleUrls: ['./admin-citas.component.css']
})
export class AdminCitasComponent {

  citasPasadas:Array<any> = []
  citasPendintes:Array<any> = []


  constructor(private api:ApiService,private helpers:HelpersService){

  }

  getCitas(){
    const currentDate = new Date();

    this.api.getCitas().subscribe(data=>{
      
      data.forEach((element: any) => {
        let newDate = new Date(element.fecha);
        let pacienteid = element.paciente_idi
        
        let id = this.helpers.extractUntilSlash(pacienteid)
        this.api.getPaciente(Number(id)).subscribe(data =>{
            element.paciente = data[0]
            console.log(data[0])
            if (newDate > currentDate){
              this.citasPendintes.push(element)
            }else{
              this.citasPasadas.push(element)
            }
          }
        )

        
      });
    })
  }



  ngOnInit(){
    this.getCitas()


  }

  
}
