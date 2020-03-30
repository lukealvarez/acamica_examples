class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(subscriptor) {
        this.observers.push(subscriptor);
    }

    unsubscribe(subscriptor) {
        this.observers = this.observers.filter(subscriber => subscriber !== subscriptor);
      }
    
    notifyAll(data) {
    this.observers.forEach(observer => {
        observer.notify(data);
        console.log(`Observer ${observer.id} fue actualizado con el valor ${data}.`);
    });
    }
}