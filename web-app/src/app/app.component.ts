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
  constructor(private productService: ProductsService){}
  products: IProduct[];
  errorMessage: string;

  test1(): void {
    this.productService.getAllProducts().subscribe({
      next: products => this.products = products,
      error: err => this.errorMessage = err
    });
  }
}
