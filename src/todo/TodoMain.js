import React, { useContext } from 'react';
import TodoCard from './TodoCard';
import { dataContext } from './TodosContext';
import AddForm from './AddForm';

const TodoMain = () => {
  const [data, setData] = useContext(dataContext);

  const deletHandler = e => {
    e.preventDefault();
    setData(data.filter(item => item.id != e.target.id));
    console.log(e.target.id);
  };

  const theList = data.map(item => (
    <TodoCard
      item={item}
      key={item.id}
      id={item.id}
      deletHandler={deletHandler}
    />
  ));
  return (
    <div className='main'>
      <AddForm tools={[data, setData]} />
      <div className='flex-box'>{theList}</div>
    </div>
  );
};

export default TodoMain;
