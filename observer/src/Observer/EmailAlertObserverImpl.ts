export class EmailAlertObserverImpl implements NotificationAlertObserver {
    emailId: string;
    observable: StockObservable;

    constructor(emailId: string, observable: StockObservable) {
        this.emailId = emailId;
        this.observable = observable;
    }

    update(): void {
        this.sendMail(this.emailId,"Product is in stock hurry up!");
    }

    sendMail(emailId: string, message: string): void {
        console.log("Mail sent to: " + emailId);
        // logic
    }
}