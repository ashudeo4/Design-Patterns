import { NormalDriveStrategy } from "./Strategy/NormalDriveStrategy";
import { Vehicle } from "./Vechicle";

export class GoodsVehicle extends Vehicle {
    constructor () {
        super(new NormalDriveStrategy());
    }
}