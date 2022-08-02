import { observer } from "mobx-react";
import { useState } from "react";
import todoStore from "../stores/TodoStore";

function Todo() {
  const [newTodo, setNewTodo] = useState("");
  const handleAddNew = () => {
    todoStore.addTodo(newTodo);
    setNewTodo("");
  };
  const handleChangeTodo = (e: any) => {
    setNewTodo(e.target.value);
  };
  return (
    <div>
      <div>Todo demo</div>
      <div>
        <input
          type="text"
          name="todo"
          id="todo"
          value={newTodo}
          onChange={handleChangeTodo}
          autoComplete="false"
        />
        <button onClick={handleAddNew}>Add</button>
        <button onClick={() => todoStore.clearCompleted()}>
          Clear complete
        </button>
      </div>

      <h1>Todo</h1>
      <ul>
        {todoStore.todos.map((todo, index) => {
          if (!todo.completed) {
            return (
              <li key={index}>
                {todo.text}
                <button onClick={() => todoStore.removeTodo(todo.id)}>X</button>
                <button onClick={() => todoStore.toggleTodo(todo.id)}>
                  Toggle
                </button>
              </li>
            );
          }
        })}
      </ul>

      <h1>Todo Complete</h1>
      <ul>
        {todoStore.todos.map((todo, index) => {
          if (todo.completed) {
            return (
              <li key={index}>
                {todo.text}
                <button onClick={() => todoStore.removeTodo(todo.id)}>X</button>
                <button onClick={() => todoStore.toggleTodo(todo.id)}>
                  Toggle
                </button>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default observer(Todo);
