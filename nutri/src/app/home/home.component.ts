import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isAuth:boolean = false
  isAuthFalse = "false"

  constructor(private service: ApiService) { }

  login(){
    this.service.generateAPIToken()
    this.isAuth = this.service.userAuth    
  }
  ngOnInit(){
   this.service.checkForToken()
   this.isAuth = this.service.userAuth
   
  }

}
