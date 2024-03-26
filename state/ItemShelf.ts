import { Item } from "./Item";

export class ItemShelf {
    code: number;
    item: Item;
    soldOut: boolean;

    public getCode(): number {
        return this.code;
    }

    public setCode(code: number): void {
        this.code = code;
    }

    public getItem(): Item {
        return this.item;
    }

    public setItem(item: Item): void {
        this.item = item;
    }

    public isSoldOut(): boolean {
        return this.soldOut;
    }

    public setSoldOut(soldOut: boolean): void {
        this.soldOut = soldOut;
    }

}