import { SportsDriveStrategy } from "./Strategy/SportsDriveStrategy";
import { Vehicle } from "./Vechicle";

export class OffRoadVehicle extends Vehicle {
    constructor () {
        super(new SportsDriveStrategy());
    }
}