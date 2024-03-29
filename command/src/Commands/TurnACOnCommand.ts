import { AirConditioner } from "../AirConditoner";

export class TurnACOnCommand implements ICommand {
    ac: AirConditioner;

    constructor(ac: AirConditioner) {
        this.ac = ac;
    }
    setTemperature(temperature: number): void {
        throw new Error("Method not implemented.");
    }
    execute(): void {
        this.ac.turnOnAc();
    }
    undo(): void {
        this.ac.turnOffAc();
    }
    
}