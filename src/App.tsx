import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Home from "./views/Home";
import Todo from "./views/Todo";

const App = () => {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/todo">Todo</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="todo" element={<Todo />} />
      </Routes>
    </div>
  );
};

export default App;
