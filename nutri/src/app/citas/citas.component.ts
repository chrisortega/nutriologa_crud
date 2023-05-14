import { Component, Input } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})



export class CitasComponent {
  
  constructor(private api:ApiService){}
  @Input() idpaciente:any | undefined
  citas:Array<cita> | undefined
  displayStyle = "none";
  modal_cita_id:string | undefined 
  data = {
    labels: ['cita1', 'cita2', 'cita3', 'cita4', 'cita3', 'cita4'],
    datasets: [{
      label: 'Peso',
      data: [90, 89, 85, 90, 95, 97],
      borderWidth: 1
    },
    {
      label: 'MSC',
      data: [30, 35, 36, 36, 39, 40],
      borderWidth: 1
    }]
  }
  options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }  
  ngOnInit(){
    this.api.getCitasPaciente(this.idpaciente).subscribe(data=>{
      this.citas = data
      
    })
  }
  
  openPopup(id:any){
    this.displayStyle = "block";
    this.modal_cita_id = id
    


  }

  closePopup(){
    this.displayStyle = "none";

  }

}


export class cita{
  idi:String | undefined
  fecha: Date | undefined
}