import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from '../modules/item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'item-row',
  templateUrl: './item-row.component.html',
  styleUrls: ['./item-row.component.css']
})
export class ItemRowComponent implements OnInit, OnChanges {

  @Input()
  category : string;

  @Input()
  searchText : string;

  @Input()
  isOnlyStocked : boolean;

  itemList: Item[];

  constructor(private itemService: ItemService) {
    this.category = "";
    this.searchText = "";
    this.isOnlyStocked = false;
    this.itemList = [];
   }

  ngOnInit(): void {
      this.itemList = this.itemService.getItems(this.category);
  }

  ngOnChanges(changes: SimpleChanges): void {
      //console.log(changes);
  }
}
