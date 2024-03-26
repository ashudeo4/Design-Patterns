import { DebugLogProcessor } from "./DegugLogProcessor";
import { ErrorLogProcessor } from "./ErrorLogProcessor";
import { InfoLogProcessor } from "./InfoLogProcessor";
import { LogProcessor } from "./LogProcessor";

let logObject: LogProcessor = new InfoLogProcessor(new DebugLogProcessor(new ErrorLogProcessor(null)));

logObject.log(LogProcessor.ERROR, "exception happens");
logObject.log(LogProcessor.DEBUG, "need to debug this ");
logObject.log(LogProcessor.INFO, "just for info ");
