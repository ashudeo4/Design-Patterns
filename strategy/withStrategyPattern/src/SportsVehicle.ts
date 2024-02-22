import { SportsDriveStrategy } from "./Strategy/SportsDriveStrategy";
import { Vehicle } from "./Vechicle";

export class SportsVehicle extends Vehicle {
    constructor () {
        super(new SportsDriveStrategy());
    }
}