export class AirConditioner {
    private isOn: boolean;
    temperature: number;

    turnOnAc(): void {
        this.isOn =true;
        console.log("AC is ON");
    }

    turnOffAc(): void {
        this.isOn =false;
        console.log("AC is OFF");
    }

    setTemperature(temperature: number): void {
        this.temperature = temperature;
        console.log(`Temperature is at ${temperature}`);
    }
}