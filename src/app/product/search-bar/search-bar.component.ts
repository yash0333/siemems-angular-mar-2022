import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output()
  searchTextEvent = new EventEmitter<string>();

  @Output()
  isOnlyStockedEvent = new EventEmitter<boolean>();

  constructor() { 
  }

  ngOnInit(): void {
  }

  onSerachTextChnage(searchText : string) {
    this.searchTextEvent.emit(searchText);
  }

  onOnlyStockedChange(eventArgs: any){
    this.isOnlyStockedEvent.emit(eventArgs.target.checked);
  }
}
