import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class Search {


  private searchText = new BehaviorSubject<string>('');

  searchText$ = this.searchText.asObservable();

  setSearch(text: string): void {
    this.searchText.next(text);
  }


}
