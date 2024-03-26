interface ICommand {
    execute(): void;

    setTemperature(temperature: number): void;

    undo(): void;
}