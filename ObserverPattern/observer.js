class Observer {
    constructor(id, htmlElement) {
        this.id = id;
        this.htmlElement = htmlElement;
    }

    notify(data) {
        this.htmlElement.textContent = data;
    }
}