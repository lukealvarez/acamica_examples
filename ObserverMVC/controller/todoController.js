 class TodoController{
    constructor(todoList) {
        this.todoList = todoList;
    }

    addTodo(name) {
        const newTodo = new ToDo(this.todoList.list.length + 1, name);
        this.todoList.save(newTodo);
    }
}