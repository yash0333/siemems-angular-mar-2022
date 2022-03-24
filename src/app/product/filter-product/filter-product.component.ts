import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'filter-product',
  templateUrl: './filter-product.component.html',
  styleUrls: ['./filter-product.component.css']
})
export class FilterProductComponent implements OnInit {

  searchText : string;
  isOnlyStocked : boolean;

  constructor() {
    this.searchText = "";
    this.isOnlyStocked = false;
   }

  ngOnInit(): void {
  }

  handleSearchTextChange(searchText: string){
    this.searchText = searchText;
  }

  handleOnlyStocked(isOnlyStocked: boolean){
    this.isOnlyStocked = isOnlyStocked;
  }
}
