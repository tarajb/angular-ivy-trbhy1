import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  template:
    '<h1 [ngClass]="currentClasses" [ngStyle]="currentStyle"> {{name}}</h1> <ng-content></ng-content> {{today | date}} <br><label for="example">{{name}}</label><br> <input [(ngModel)]="name" id="example"/>',
  styles: [
    `
  h1: {
    color:blue;
  }`,
  ],
})
export class ChildComponent {
  name = 'Taraj';
  today = new Date();
}
