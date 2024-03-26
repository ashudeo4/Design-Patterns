export abstract class LogProcessor {
    static INFO: number = 1;
    static DEBUG: number = 2;
    static ERROR: number = 3;

    nextLoggerProcessor: LogProcessor;

    constructor(loggerProcessor: LogProcessor) {
        this.nextLoggerProcessor = loggerProcessor;
    }

    log(logLevel: number, message: string): void {
        if (this.nextLoggerProcessor != null) {
         this.nextLoggerProcessor.log(logLevel, message);   
        }
    }
}