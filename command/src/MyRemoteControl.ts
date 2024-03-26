//Invoker
export class MyRemoteControl {
    command: ICommand;

    constructor() {

    }

    setCommand(command: ICommand): void {
        this.command = command;
    }

    pressButton() {
        this.command.execute();
    }

    setTemperature(temperature :number) {
        this.command.setTemperature(temperature);
    }
}