import { AirConditioner } from "../AirConditoner";

export class SetTemperature implements ICommand {
    ac: AirConditioner;

    constructor(ac: AirConditioner) {
        this.ac = ac;
    }
    execute(): void {
        throw new Error("Method not implemented.");
    }
    setTemperature(temperature: number): void {
        this.ac.setTemperature(temperature);
    }
   
    
    
}