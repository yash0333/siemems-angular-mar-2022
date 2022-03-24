import { Injectable } from '@angular/core';
import { Item } from '../modules/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  itemList: Item[];

  constructor() {
    this.itemList = JSON.parse(`[
      {"category": "Sporting Goods", "price": "$49.99", "stocked": true, "name": "Football"},
      {"category": "Sporting Goods", "price": "$9.99", "stocked": true, "name": "Baseball"},
      {"category": "Sporting Goods", "price": "$29.99", "stocked": false, "name": "Basketball"},
      {"category": "Electronics", "price": "$99.99", "stocked": true, "name": "iPod Touch"},
      {"category": "Electronics", "price": "$399.99", "stocked": false, "name": "iPhone 5"},
      {"category": "Electronics", "price": "$199.99", "stocked": true, "name": "Nexus 7"}
  ]`);
   }

   getCategories() : string[] {
      return [...new Set(this.itemList.map(item => item.category))];
   }

   getItems(category : string) : Item[] {
    return this.itemList.filter(item => item.category == category);
  }
}
