import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-app';
  showImage: boolean = true;
  price = 12.986;

  toggleImage(): void{
    this.showImage = !this.showImage;
  }
}
