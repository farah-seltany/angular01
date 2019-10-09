import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  @HostBinding('style.color') myColor:string;
  @HostBinding('style.fontSize') mySize:string;

  constructor() { }

  ngOnInit() {
  }
@HostListener('mouseenter') mouseEnterEvent (eventData:Event) {
  this.myColor = 'gold';
  this.mySize = '30px';
}

@HostListener('mouseleave') mouseLeaveEvent (eventData:Event) {

  this.myColor = 'black';
  this.mySize = '16px';
}
}
