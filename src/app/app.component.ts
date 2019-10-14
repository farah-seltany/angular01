import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular01';
  counter: number = 0;

  incrementCounter()
  {
    this.counter = this.counter + 1;
  }
}
