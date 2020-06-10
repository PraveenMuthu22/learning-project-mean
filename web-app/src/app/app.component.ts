import { Component } from '@angular/core';
import { CurrencyUtilsService } from './common/currency-utils.service';
import { Observable, range } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  source$: Observable<number> = range(0, 5);

  test1(): void {
    this.source$.pipe(
      map(x => x * 3)
    ).subscribe(x => console.log(x));
  }

  test2(): void {
    this.source$.pipe(
      filter(x => x % 2 === 0)
    ).subscribe(x => console.log(x));
  }
}
