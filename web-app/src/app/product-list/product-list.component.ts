import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = [
    {id: 1, name: "baseball bat"},
    {id: 2, name: "cricket ball"},
    {id: 3, name: "sports jacket"},
    {id: 4, name: "Fishing rod"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
