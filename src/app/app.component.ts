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
  nameError: string = "";

  ngOnInit(): void{
    this.title = "Hello from Bridgelabz!!";
  }

  onClick($event:any){
    console.log("save button is clicked!", $event);
    window.open(this.webUrl, "_blank");
  }

  onInput($event:any){
    console.log("Change the event Occurred!", $event.data);
    const nameRegex = RegExp('^[A-Z]{1}[a-z A-Z\\s]{2,}$');
    if (nameRegex.test(this.userName)){
      this.nameError = "";
      return;
    }
    this.nameError = "Name is incorrect!";
  }
}
