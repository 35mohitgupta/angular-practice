import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterItemsService {

  constructor() { }

  filterByCategory(list: any,category: any): any{
      return list.filter(item => item.category===category);
  }
}
