import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input('amma') parentName;
  @Output() childEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  fireEvent() {
    this.childEvent.emit('hey child')
    console.log(this.childEvent.emit());
  }
}
