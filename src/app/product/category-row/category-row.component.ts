import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../modules/item';

@Component({
  selector: 'category-row',
  templateUrl: './category-row.component.html',
  styleUrls: ['./category-row.component.css']
})
export class CategoryRowComponent implements OnInit {

  @Input()
  category : string;

  constructor() {
    this.category = "";
   }

  ngOnInit(): void {
  }

}
