import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-navig',
  templateUrl: './navig.component.html',
  styleUrls: ['./navig.component.css']
})
export class NavigComponent {

  isAuth:boolean = false
constructor(private service:ApiService){}


logout(){
  this.service.revokeSession()
  window.location.reload();
}

  ngOnInit(){
    this.isAuth = this.service.checkForToken()
    

  }
}
