import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Paciente } from '../data/paciente';



@Injectable({
  providedIn: 'root'
})


export class ApiService {


  
  constructor(private http: HttpClient) { }

  
  userAuth:boolean = false
  api = "http://localhost:8000"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };



  dataSave(token:string){
    sessionStorage.setItem('access_token', token);
  }
  revokeSession(){
    sessionStorage.clear()
  }

  checkForToken(){
    //check for token     
    if (sessionStorage.getItem("access_token")){
      this.userAuth = true
      return this.userAuth
    }
    return this.userAuth
        
  }
  getToken():String{
    return String(localStorage.getItem('access_token') || '');
  }
  generateAPIToken(){
        const cred = { 
          "username":"ivan",
          "password":"rata3232!!M"
        }
        this.http.post<any>(this.api + '/api/token/',cred, this.httpOptions ).subscribe(data => {          
        this.dataSave(data.access)
      })
  }

  getCitasPaciente(id:number){
    return this.http.get<any>(this.api+'/api/cita?paciente_idi='+String(id))
  }

  getPacientes(){
    this.httpOptions.headers.append("Token" , String(this.getToken()))
    return this.http.get<any>(this.api+'/api/paciente')
  }


  getPaciente(id:number){
    this.httpOptions.headers.append("Token" , String(this.getToken()))
    return this.http.get<any>(this.api+'/api/paciente?idi='+id)
  }
  addPaciente(paciente : Paciente){
    this.httpOptions.headers.append("Token" , String(this.getToken()))
    const body = {
      name:paciente.name,
      desc:paciente.desc
    }
      
    return this.http.post<any>(this.api + '/api/paciente/',body, this.httpOptions ).subscribe(data=>{
      console.log(data)},error=>{
        console.log(error)
      
    })
  }

}
