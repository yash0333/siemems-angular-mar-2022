import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterProductComponent } from './filter-product/filter-product.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { CategoryRowComponent } from './category-row/category-row.component';
import { ItemRowComponent } from './item-row/item-row.component';
import { ItemService } from './services/item.service';



@NgModule({
  declarations: [
    FilterProductComponent,
    SearchBarComponent,
    ProductTableComponent,
    CategoryRowComponent,
    ItemRowComponent
  ],
  imports: [CommonModule],
  exports: [FilterProductComponent],
  providers: [{provide: ItemService, useClass: ItemService}]
})
export class ProductModule { }
