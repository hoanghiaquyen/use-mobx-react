import { makeAutoObservable } from "mobx";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

class TodoStore {
  todos: Todo[] = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  addTodo = (newTodo: string) => {
    this.todos.push({
      id: this.todos.length + 1,
      text: newTodo,
      completed: false,
    });
  };

  removeTodo = (id: number) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  };

  toggleTodo = (id: number) => {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
  };

  clearCompleted = () => {
    this.todos = this.todos.filter((todo) => !todo.completed);
  };
}

export default new TodoStore();
