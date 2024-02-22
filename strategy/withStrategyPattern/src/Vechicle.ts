export class Vehicle {
    driveObj: DriveStrategy

    constructor( driveObj: DriveStrategy) {
        this.driveObj = driveObj;
    }

    drive(): void {
        this.driveObj.drive()
    }
}