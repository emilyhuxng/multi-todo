import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/Todo/TodoList";
import { useSelector } from "react-redux";

function App() {
  // const dispatch = useDispatch();
  const todoLists = useSelector((state) => state.todoLists);

  return (
    <div>
      <Header />
      {todoLists.map((todoList, index) => (
        <TodoList id={todoList.id} title={todoList.title} />
      ))}
    </div>
  );
}

export default App;
