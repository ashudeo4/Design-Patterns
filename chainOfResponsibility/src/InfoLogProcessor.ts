import { LogProcessor } from "./LogProcessor";

export class InfoLogProcessor extends LogProcessor{

    constructor(nextLogProcessor: LogProcessor){
        super(nextLogProcessor);
    }

    log(logLevel: number,message: string): void{
        if(logLevel == LogProcessor.INFO) {
            console.log("INFO: " + message);
        } else{
            super.log(logLevel, message);
        }

    }
}
