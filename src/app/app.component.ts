import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {

  prefix: string = "I am a ";
  name: string = "Knob";

  speak() {
    const sentence = this.prefix + this.name;
    return sentence;
  }

}
