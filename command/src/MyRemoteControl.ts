//Invoker
export class MyRemoteControl {
    command: ICommand;
    acCommandHistory:ICommand[] = [];

    constructor() {

    }

    setCommand(command: ICommand): void {
        this.command = command;
    }

    pressButton(): void {
        this.command.execute();
        this.acCommandHistory.push(this.command);
    }

    setTemperature(temperature :number): void {
        this.command.setTemperature(temperature);
    }

    undo(): void {
        if (this.acCommandHistory.length) {
            let lastCommand: ICommand = this.acCommandHistory.pop();
            lastCommand.undo();
        }
    }
}