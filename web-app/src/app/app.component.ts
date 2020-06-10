import { Component } from '@angular/core';
import { CurrencyUtilsService } from './common/currency-utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value = 19.99;
  constructor(private currencyService: CurrencyUtilsService) { }

  test(): void{
    this.value = this.currencyService.convertUSDtoLKR(this.value);
  }
}
