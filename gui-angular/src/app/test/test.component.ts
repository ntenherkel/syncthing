import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  @Output() testOutputEvent: EventEmitter<string>;
  @Input() testInput: string = 'test';
  constructor() {
      this.testOutputEvent = new EventEmitter<string>();
   }


  testFunction() {
    alert(this.testInput);
    this.testOutputEvent.emit('This text was emited from Angular9 with an EventEmiter and displayed in this "<div>" whis is part of the AngularJs app');
  }
}