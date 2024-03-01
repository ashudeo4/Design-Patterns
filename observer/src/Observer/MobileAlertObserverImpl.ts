export class MobileAlertObserverImpl implements NotificationAlertObserver {
    phoneNumber: number;
    observable: StockObservable;

    constructor(phoneNumber: number, observable: StockObservable) {
        this.phoneNumber = phoneNumber;
        this.observable =  observable;
    }

    update(): void {
        this.sentMessageOnMobile(this.phoneNumber, "Product is in stock hurry up!");
    }

    sentMessageOnMobile(phoneNumber: number, message: string): void {
        console.log("Message sent to: " + phoneNumber);
    }
}