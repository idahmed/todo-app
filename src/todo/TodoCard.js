import React from 'react';

const TodoCard = props => {
  const { title, content, id } = props.item;
  const saveStyle = {
    backgroundColor: 'black',
    color: 'white',
    border: '1px solid white',
    margin: 'auto',
    width: '50%'
  };

  return (
    <div className='card'>
      <h3>{title}</h3>
      <p>{content}</p>
      <input
        type='submit'
        value='Delet'
        style={saveStyle}
        id={id}
        onClick={props.deletHandler}
      />
    </div>
  );
};

export default TodoCard;
