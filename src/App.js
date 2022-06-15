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
      <div className="grid grid-cols-3 gap-8 px-8">
        {todoLists.map((todoList, index) => (
          <TodoList
            listId={todoList.listId}
            title={todoList.title}
            list={todoList.list}
            filter={todoList.filter}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
