
const EMPTYTEXT = "No hay tareas para esta semana!";

class TodoView extends Observer {
    constructor(){
        super();

        const todoList = new TodoList();
        todoList.subscribe(this);

        this.todoController = new TodoController(todoList);
        this.todoElements = document.querySelector('#todoList');
    };

    initialize(){
        const addButton = document.querySelector('#addButton');
        
        addButton.onclick = () => { 
            const newElement = document.querySelector('#input');
            
            if (newElement.value !== '') {
                this.todoController.addTodo(newElement.value);
                newElement.value = '';
            } else {
                alert('Debe agregar un valor');
            }
        };
    }

    notify(data){
        this.addTodo(data);
    }

    addTodo(newNode) {
        var li = document.createElement('li');
        var content = document.createTextNode(`${newNode.getId()} - ${newNode.getName()}`);
        li.appendChild(content);

        this.todoElements.appendChild(li);
        this.validateChilds();
    }

    validateChilds(){
        if (this.todoElements.childElementCount == 0) {
            var textNode = document.createTextNode(EMPTYTEXT);
            this.todoElements.appendChild(textNode)
        } else {
            var div = document.querySelector('#todos');

            if ( div.firstChild.data &&
                 div.firstChild.data.includes(EMPTYTEXT)) {
                div.removeChild(div.firstChild);
            }
        }
    }
}