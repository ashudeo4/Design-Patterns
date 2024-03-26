import { LogProcessor } from "./LogProcessor";

export class DebugLogProcessor extends LogProcessor{

    constructor(nextLogProcessor: LogProcessor){
        super(nextLogProcessor);
    }

    log(logLevel: number,message: string): void{
        if(logLevel == LogProcessor.DEBUG) {
            console.log("DEBUG: " + message);
        } else{
            super.log(logLevel, message);
        }

    }
}
