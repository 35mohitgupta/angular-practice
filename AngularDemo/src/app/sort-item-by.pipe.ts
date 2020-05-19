import { Pipe, PipeTransform } from '@angular/core';
import Item from './directives/Item';

@Pipe({
  name: 'sortItemBy'
})
export class SortItemByPipe implements PipeTransform {

  transform(value: Item[], args: string): Item[] {
    if(args ==='ItemName'){
      return value.sort((a: Item, b: Item) => {
        if(a.itemName < b.itemName)
          return -1;
        else if(a.itemName > b.itemName)
          return 1;
        else
          return 0;
      });
    }else if(args === 'ItemPrice'){
      return value.sort((a: Item, b: Item) => {
        if(a.itemPrice < b.itemPrice)
          return -1;
        else if(a.itemPrice > b.itemPrice)
          return 1;
        else
          return 0;
      });
    }
    return value;
  }

}
