import { useState } from "react";
import { Forms } from "./Forms";
import { Header } from "./Header";
import "./styles.css";
import { Todos } from "./Todos";

export default function App() {
  const [todos, setTodos] = useState([
    { favorite: false, text: "Купить продукты" },
    { favorite: false, text: "Купить бананы" },
    { favorite: false, text: "Купить машину" },
    { favorite: false, text: "Купить дом" },
    { favorite: false, text: "Купить земельный участок" },
  ]);

  const [text, setText] = useState("");

  const deleteTodo = (indexOfDeletedItem) => {
    const filterTodos = todos.filter((todo, index) => {
      if (index === indexOfDeletedItem) {
        return false;
      }
      return true;
    });
    setTodos(filterTodos);
  };

  const makeFavorite = (indexOfMakingFavorite) => {
    const newTodos = todos.map((item, index) => {
      if (index === indexOfMakingFavorite) {
        return {
          ...item,
          favorite: !item.favorite,
        };
      }
      return item;
    });
    setTodos(newTodos);
  };

  const addTodo = () => {
    setTodos([
      {
        text: text,
        favorite: false,
      },
      ...todos,
    ]);
    setText("");
  };

  return (
    <div className="App">
      <Header />
      <Forms text={text} addTodo={addTodo} setText={setText} />
      <Todos
        todos={todos}
        makeFavorite={makeFavorite}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

////

// const man = {
//   name: "John",
//   age: 30,
//   salary: 1000,
// };

// const x = {
//   // Скопировали свойства объекта man изменив name
//   ...man,
//   name: "Nick",
// };

// console.log(man);
// console.log(x);

////

// const arr = [1, 2, 3, 4, 5];

// const arrChanged = [...arr];

// console.log(arrChanged);
