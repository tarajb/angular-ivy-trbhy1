import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template:
    '<h1 [ngClass]="currentClasses" [ngStyle]="currentStyle"> {{name}}</h1> <ng-content></ng-content> {{today | date}}',
  styles: [
    `
  h1: {
    color:blue;
  }`,
  ],
})
export class ChildComponent implements OnInit {
  name = 'Taraj';
  today = new Date();
  currentClasses;
  currentStyle;
  ngOnInit() {
    this.setCurrentClasses();
    this.setCurrentStyle();
  }
  setCurrentClasses() {
    this.currentClasses = {
      mastHeading: true,
      mainTitle: false,
    };
  }
  setCurrentStyle() {
    this.currentStyle = {
      fontStyle: 'italic',
      fontWeight: 'bold',
    };
  }
}
