import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl = "/assets/BridgeLabz-2.jpg";
  webUrl = "https://www.bridgelabz.com";
  userName: string = "";

  ngOnInit(): void{
    this.title = "Hello from Bridgelabz!!";
  }

  onClick($event:any){
    console.log("save button is clicked!", $event);
    window.open(this.webUrl, "_blank");
  }
}
