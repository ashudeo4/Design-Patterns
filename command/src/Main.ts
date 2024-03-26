import { AirConditioner } from "./AirConditoner";
import { SetTemperature } from "./Commands/SetTemperature";
import { TurnACOnCommand } from "./Commands/TurnACOnCommand";
import { MyRemoteControl } from "./MyRemoteControl";

let airConditioner: AirConditioner = new AirConditioner();
let remoteObj: MyRemoteControl = new MyRemoteControl();

remoteObj.setCommand(new TurnACOnCommand(airConditioner));
remoteObj.pressButton();

remoteObj.setCommand(new SetTemperature(airConditioner));
remoteObj.setTemperature(20);