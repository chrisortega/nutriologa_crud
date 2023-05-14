import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detallescita',
  templateUrl: './detallescita.component.html',
  styleUrls: ['./detallescita.component.css']
})
export class DetallescitaComponent {
  id:string | null | undefined
  
    constructor(
      private route: ActivatedRoute
    ) {}

    

    ngOnInit() {
      this.route.queryParams
        .subscribe(params => {
          console.log(params); // { orderby: "price" }
          this.id = params['id']    
                
        }
      );
    }
}
