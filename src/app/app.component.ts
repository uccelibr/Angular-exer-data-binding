import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
i: number = 0

somar()  {
this.i = this.i+1;
  
}

subtrair() {
  this.i = this.i-1;

}

}
