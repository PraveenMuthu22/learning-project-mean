import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-app';

  people : any = [
    {name: 'john', gender: 'male'},
    {name: 'george', gender: 'male'},
    {name: 'mary', gender: 'female'},
  ];

  constructor(){
    this.filteredPeople = this.people;
    this.listFilter = '';
  }

  filteredPeople: any[];

  _listFilter: string;
  get listFilter(): string{
    return this._listFilter;
  }

  set listFilter(value: string){
    this._listFilter = value;
    this.filteredPeople = this.listFilter ? this.performFilter(this.listFilter) : this.people;
  }

  performFilter(filterBy: string): any[]{
    return this.people.filter(person => person.gender === filterBy);
  }

}
