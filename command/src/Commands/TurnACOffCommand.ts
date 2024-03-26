import { AirConditioner } from "../AirConditoner";

export class TurnACOffCommand implements ICommand {
    ac: AirConditioner;

    constructor(ac: AirConditioner) {
        this.ac = ac;
    }
    setTemperature(temperature: number): void {
        throw new Error("Method not implemented.");
    }
    execute(): void {
        this.ac.turnOffAc();
    }

    undo(): void {
        this.ac.turnOnAc();
    }
    
    
}