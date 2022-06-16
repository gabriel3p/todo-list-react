



export default class ToDoControllers {
    static getValues (event) {
        event.preventDefault();

        [...event.target].forEach(element => {
            //if (element.value) todos[element.name] = element.value
        });

        //console.log(todos)
    }

    renderTodos (toDos) {

    }
} 