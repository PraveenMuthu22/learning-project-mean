import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-app';
  childStatus = 'sleeping';

  onNotify(newStatus): void {
    this.childStatus = newStatus;
  }
}
