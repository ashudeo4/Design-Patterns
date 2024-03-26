import { Coin } from "./Coin";
import { Item } from "./Item";
import { VendingMachine } from "./VendingMachine";

interface State {
    clickOnInsertButton(machine: VendingMachine): void | never;

    clickOnStartProductSelectionButton(machine: VendingMachine): void | never;

    insertCoin(machine: VendingMachine, coin: Coin): void | never;

    chooseProduct(machine: VendingMachine, codeNumber: number): void | never;

    getChange(returnChangeMoney: number): number | never;

    dispenseProduct(machine: VendingMachine, codeNumber: number): Item | never;

    refundFullMoney(machine: VendingMachine): Coin[] | never;

    updateInventory(machine: VendingMachine, item: Item, codeNumber: number): void | never;

}