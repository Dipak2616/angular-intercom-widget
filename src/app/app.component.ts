import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  status:string = "boot";
  ngOnInit() {
    window.intercomSettings.alignment = "right";

    window.Intercom('boot', {
      app_id: "fyq3wodw",
    });
  }
  interectWidget(event: any): void {

   let action = event.target.id.split("_")[1];
    console.log(action);
    switch (action) {
      case 'boot' :{
        if(this.status =="shutdown"){
          this.status = "boot"
          window.Intercom('boot', {
            app_id: "fyq3wodw",
          });
        }
        break;
      }
      case 'show': {
        if(this.status =="boot")
        window.Intercom("show");
        break;
      }
      case 'showMessage': {
        if(this.status =="boot")
        window.Intercom("showMessages");
        break;
      }
      case 'showNewMessage': {
        if(this.status =="boot")
        window.Intercom("showNewMessage");
        break;
      }

      case 'hide': {
        if(this.status =="boot")
        window.Intercom("hide");
        break;
      }

      case 'update': {
        if(this.status =="boot")
        window.Intercom("update");
        break;
      }
      case 'shutdown': {
        if(this.status =="boot")
        this.status = "shutdown";
        window.Intercom("shutdown");
        break;
      }
    }

  }

}
