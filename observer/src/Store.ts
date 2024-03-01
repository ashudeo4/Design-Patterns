import { IphoneObservableImp } from "./Observable/IphoneObservableImpl";
import { EmailAlertObserverImpl } from "./Observer/EmailAlertObserverImpl";
import { MobileAlertObserverImpl } from "./Observer/MobileAlertObserverImpl";

class Store {
    main(): void {
        const iphoneStockObservable: StockObservable = new IphoneObservableImp;

        const observer1: NotificationAlertObserver = new EmailAlertObserverImpl("xyz1@gmail.com", iphoneStockObservable);
        const observer2: NotificationAlertObserver = new EmailAlertObserverImpl("xyz2@gmail.com", iphoneStockObservable);
        const observer3: NotificationAlertObserver = new MobileAlertObserverImpl(94667482933, iphoneStockObservable);

        iphoneStockObservable.add(observer1);
        iphoneStockObservable.add(observer2);
        iphoneStockObservable.add(observer3);
        
        iphoneStockObservable.setStockCount(10);
    }
}

let store = new Store();
store.main()