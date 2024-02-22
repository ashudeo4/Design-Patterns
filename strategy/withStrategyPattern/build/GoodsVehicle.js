"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoodsVehicle = void 0;
const NormalDriveStrategy_1 = require("./Strategy/NormalDriveStrategy");
const Vechicle_1 = require("./Vechicle");
class GoodsVehicle extends Vechicle_1.Vehicle {
    constructor() {
        super(new NormalDriveStrategy_1.NormalDriveStrategy());
    }
}
exports.GoodsVehicle = GoodsVehicle;
