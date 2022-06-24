import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  template: '<h1> {{name}}</h1> <ng-content></ng-content> {{today | date}}',
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
