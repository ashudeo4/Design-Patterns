import { Coin } from "./Coin";
import { Inventory } from "./Inventory";

export class VendingMachine {
    
    vendingMachineState: State;
    inventory: Inventory;
    coinList: Coin[];

    constructor() {
        this.vendingMachineState = new IdleState();
        this.inventory = new Inventory(10);
        this.coinList = [];
    }

    public getVendingMachineState(): State {
        return this.vendingMachineState;
    }

    public setVendingMachineState(vendingMachineState: State): void {
        this.vendingMachineState = vendingMachineState;
    }

    public getInventory(): Inventory {
        return this.inventory;
    }

    public setInventory(inventory: Inventory): void {
        this.inventory = inventory;
    }

    public getCoinList(): Coin[] {
        return this.coinList;
    }

    public setCoinList(coinList: Coin[]): void {
        this.coinList = coinList;
    }
}