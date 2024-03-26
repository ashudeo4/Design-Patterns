import { ItemType } from "./ItemType";

export class Item {
    private type: ItemType;
    private price: number;

    public getType(): ItemType {
        return this.type;
    }

    public setType(type: ItemType): void {
        this.type = type;
    }

    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

}