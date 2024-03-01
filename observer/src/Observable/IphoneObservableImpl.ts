export class IphoneObservableImp implements StockObservable {
    observerList: NotificationAlertObserver[] = [];
    stockCount:number = 0;

    add(observer: NotificationAlertObserver): void {
        this.observerList.push(observer);
    }

    remove(observer: NotificationAlertObserver): void {
        this.observerList.pop();
    }

    notifySubscriber(): void {
        for(let observer of this.observerList) {
            observer.update();
        }
    }

    setStockCount(newStockAdded: number): void {
        if (this.stockCount == 0) {
            this.notifySubscriber()
        }

        this.stockCount = this.stockCount + newStockAdded;
    }

    getStockCount(): number {
        return this.stockCount;
    }
}