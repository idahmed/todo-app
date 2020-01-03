import React, { useContext } from "react";
import TodoCard from "./TodoCard";
import { dataContext } from "./TodosContext";
import AddForm from "./AddForm";

function TodoMain() {
  const [data, setData] = useContext(dataContext);

  return (
    <div className="main">
      <AddForm tools={[data, setData]} />
      <div className="flex-box">
        {data.map(item => (
          <TodoCard item={item} key={item.id} id={item.id} />
        ))}
      </div>
    </div>
  );
}

export default TodoMain;
