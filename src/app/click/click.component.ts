import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.css']
})
export class ClickComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output () incrementEvent = new EventEmitter();



  onIncrementButtonClicked()
  {
    this.incrementEvent.next();
  }

}
