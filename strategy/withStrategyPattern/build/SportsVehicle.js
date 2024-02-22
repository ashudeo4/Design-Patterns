"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SportsVehicle = void 0;
const SportsDriveStrategy_1 = require("./Strategy/SportsDriveStrategy");
const Vechicle_1 = require("./Vechicle");
class SportsVehicle extends Vechicle_1.Vehicle {
    constructor() {
        super(new SportsDriveStrategy_1.SportsDriveStrategy());
    }
}
exports.SportsVehicle = SportsVehicle;
