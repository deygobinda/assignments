/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(indexOfTodo) {
    let newtodo = this.todos.filter((e) => e != this.todos[indexOfTodo]);
    this.todos = newtodo;
  }

  update(index, updatedTodo) {
    this.todos.map( e =>{
      if(e === this.todos[index]){
        this.todos[index] = updatedTodo
      }
    })
  }

  getAll(){
    return this.todos;
  }

  get(indexOfTodo) {
    return this.todos[indexOfTodo] || null;
  }


  update(index, updatedTodo) {
    if (index < 0 || index >= this.todos.length) {
      return; // Handle invalid index gracefully (e.g., throw an error or log a message)
    }
    this.todos[index] = updatedTodo;
  }

  clear(){
    this.todos = [];
  }

}

module.exports = Todo;
