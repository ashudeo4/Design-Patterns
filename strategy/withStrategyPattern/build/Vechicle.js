"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
class Vehicle {
    constructor(driveObj) {
        this.driveObj = driveObj;
    }
    drive() {
        this.driveObj.drive();
    }
}
exports.Vehicle = Vehicle;
