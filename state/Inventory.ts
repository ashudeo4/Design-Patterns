import { Item } from "./Item";
import { ItemShelf } from "./ItemShelf";

export class Inventory {
    private inventory: ItemShelf[];

    constructor(itemCount: number) {
        this.inventory = [];
        this.initialEmptyInventory();
    }

    public getInventory(): ItemShelf[] {
        return this.inventory;
    }

    public setInventory(inventory: ItemShelf[]): void {
        this.inventory = inventory;
    } 

    public initialEmptyInventory(): void {
        let startCode: number = 101;
        for (let i=0;i< 10;i++) {
            let space: ItemShelf = new ItemShelf();
            space.setCode(startCode);
            space.setSoldOut(true);
            this.inventory.push(space);
            startCode++;
        }
    }

    public addItem(item: Item, codeNumber: number): void {
        for ( let itemShelf of this.inventory) {
            if (itemShelf.code == codeNumber) {
                if (itemShelf.isSoldOut()) {
                    itemShelf.item = item;
                    itemShelf.setSoldOut(false);
                } else {
                    throw Error("already item is present, you can not add item here");
                }
            }
        }
    }

    public getItem(codeNumber: number): Item {
        for (let itemShelf of this.inventory) {
            if (itemShelf.code == codeNumber) {
                if (itemShelf.isSoldOut()) {
                    throw Error("item already sold out");
                } else {

                    return itemShelf.item;
                }
            }
        }
        throw Error("Invalid Code");
    }

    public updateSoldOutItem(codeNumber: number): void {
        for (let itemShelf of this.inventory) {
            if (itemShelf.code == codeNumber) {
                itemShelf.setSoldOut(true);
            }
        }
    }

}