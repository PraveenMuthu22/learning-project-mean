import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyUtilsService {

  constructor() { }

  convertUSDtoLKR(value: number): number{
    return 1 * 184.06;
  }

  convertLKRtoUSD(value: number): number{
    return value / 184.06;
  }
}
