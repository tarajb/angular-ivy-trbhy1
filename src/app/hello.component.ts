import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1 [appHighlight]="'red'">Hello {{name}}!</h1> <button (click)="sendMessage()">Send Message</button>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;
  @Output() messageString: EventEmitter<string> = new EventEmitter();

  constructor() {}
  sendMessage() {
    this.messageString.emit('Message from Hello component');
  }
}
