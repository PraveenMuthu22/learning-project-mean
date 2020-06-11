import { Component } from '@angular/core';
import { CurrencyUtilsService } from './common/currency-utils.service';
import { Observable, range } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { ProductsService } from './common/products.service';
import { IProduct } from './Interfaces/IProduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
