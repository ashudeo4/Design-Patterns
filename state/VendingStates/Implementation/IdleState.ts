import { Coin } from "../../Coin";
import { Item } from "../../Item";
import { VendingMachine } from "../../VendingMachine";

export class IdleState implements State {

    constructor(machine: VendingMachine ){
        console.log("Currently Vending machine is in IdleState");
        machine.setCoinList([]);
    }

    public clickOnInsertCoinButton(machine: VendingMachine): void{
        machine.setVendingMachineState(new HasMoneyState());
    }

    public clickOnStartProductSelectionButton(machine: VendingMachine): void {
        throw new Error("first you need to click on insert coin button");

    }

    public insertCoin(machine: VendingMachine, coin: Coin ): void{
        throw new Error("you can not insert Coin in idle state");
    }

    public  chooseProduct(machine: VendingMachine, codeNumber: number): void{
        throw new Error("you can not choose Product in idle state");
    }

    public getChange(returnChangeMoney: number): number {
        throw new Error("you can not get change in idle state");
    }

    public refundFullMoney(machine: VendingMachine ): Coin[]{
        throw new Error("you can not get refunded in idle state");
    }

    public dispenseProduct(machine: VendingMachine, codeNumber: number): Item{
        throw new Error("proeduct can not be dispensed idle state");
    }

    public updateInventory(machine: VendingMachine,item: Item, codeNumber: number): void {
        machine.getInventory().addItem(item, codeNumber);
    }
}
