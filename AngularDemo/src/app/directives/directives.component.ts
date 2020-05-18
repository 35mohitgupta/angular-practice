import { Component, OnInit } from '@angular/core';
import Item, { CATEGORY } from './Item';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  submitted: boolean=false;
  isAuthenticated: boolean=false;
  username: string;
  order: Item[]=[
    new Item('ParleG',30,CATEGORY.GROCERIES),
    new Item('shirts',555,CATEGORY.FASHION),
    new Item('badmuda',355,CATEGORY.FASHION),
    new Item('one plus',33555,CATEGORY.ELECTRONICS),
    new Item('airpod',11555,CATEGORY.ELECTRONICS)
  ];

  CATEGORY = CATEGORY;
  category: CATEGORY = CATEGORY.ALL;
  filteredItem: Item[]=[];
  fontWeight: string = 'bold';
  colorName: string = 'red';


  constructor() { }

  ngOnInit(): void {
  }

  filterCategory(category: CATEGORY){
      this.category = category;
      this.filteredItem = this.order.filter(item => item.category==category)
  }

  formSubmitted(username: string, password: string){
    this.submitted=true
    if(username+'123'===password){
      this.username = username;
      this.isAuthenticated=true;
    }else{
      this.isAuthenticated=false
    }
  }

}
