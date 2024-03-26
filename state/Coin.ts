export class Coin {
    static readonly PENNY = new Coin("PENNY", 1);
    static readonly NICKEL = new Coin("NICKEL", 5);
    static readonly DIME = new Coin("DIME", 10);
    static readonly QUARTER = new Coin("QUARTER", 25);

    private constructor(public readonly name: string, public readonly value: number) {}

    toString(): string {
        return this.name;
    }
}