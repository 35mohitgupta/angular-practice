export enum CATEGORY{ELECTRONICS, FASHION, GROCERIES, ALL}

class Item{
    
    constructor(private _itemName: string, private _itemPrice: number, private _category: CATEGORY){}

    get itemName(): string {
        return this._itemName;
    }

    get itemPrice(): number {
        return this._itemPrice
    }

    get category(): CATEGORY {
        return this._category
    }
}

export default Item;