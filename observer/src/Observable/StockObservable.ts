interface StockObservable {
    add(observer:NotificationAlertObserver): void

    remove(observer:NotificationAlertObserver): void

    notifySubscriber(): void

    setStockCount(newStockAdded: Number): void

    getStockCount(): number
}