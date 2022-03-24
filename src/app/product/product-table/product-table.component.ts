import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit, OnChanges {

  @Input()
  searchText : string;

  @Input()
  isOnlyStocked : boolean;
  
  categories : string[];

  constructor(private itemService: ItemService) { 
    this.searchText = "";
    this.isOnlyStocked = false;
    this.categories = itemService.getCategories();
  }

  ngOnInit(): void {
    console.log(this.searchText, this.isOnlyStocked);
  }

  ngOnChanges(changes: SimpleChanges): void {
      //console.log(changes);
  }
}
