import React, { useContext, useCallback } from "react";
import { dataContext } from "./TodosContext";
import * as styles from "./styles";

function TodoCard({ id, item }) {
  const [data, setData] = useContext(dataContext);
  const { title, content } = item;

  const handleDelete = useCallback(
    e => {
      e.preventDefault();

      const todos = data.filter(item => item.id !== id);

      setData(todos);
    },
    [data, id, setData]
  );
  return (
    <styles.Card className="card">
      <styles.H3White>{title}</styles.H3White>
      <styles.Paragraph>{content}</styles.Paragraph>
      <styles.Input type="submit" value="Delet" onClick={handleDelete} />
    </styles.Card>
  );
}

export default TodoCard;
