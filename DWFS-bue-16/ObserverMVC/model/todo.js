class ToDo {
    constructor(id, todoName) {
        this.id = id;
        this.todoName = todoName;
    }

    getName = () => this.todoName;
    getId = () => this.id;
}

class TodoList extends Observable{
    constructor() {
        super();
        this.list = []
    }

    save(newTodo) {
        this.list.push(newTodo);
        this.notifyAll(newTodo);
    }
}