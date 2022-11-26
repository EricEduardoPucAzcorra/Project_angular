import {Component, OnInit} from '@angular/core';
import {SwPush, SwUpdate} from "@angular/service-worker";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  //ageragr constructor SwuDate
    constructor(private SwUpdate:SwUpdate) {

    }

    ngOnInit() {

      //4 seccion
      //le pregunta al usuario si quiere reubicarse en una nueva version
      //pero primero verefica si el Swudate es isnabled
      if(this.SwUpdate.isEnabled){

        this.SwUpdate.available.subscribe(()=>{

          if(confirm("Quieres cargar esta nueva version?")){
            window.location.reload();
          }

        });

      }


    }

}

