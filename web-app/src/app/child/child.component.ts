import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  status = 'sleepy';

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  clicked(): void{
    this.status = 'clicked!';
    this.notify.emit(this.status);
  }
}
