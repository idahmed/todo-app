import React, { useState } from 'react';

const AddForm = props => {
  const [data, setData] = props.tools;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const addStyle = {
    backgroundColor: 'black',
    color: 'white',
    border: '1px solid white'
  };

  const titleHandler = e => {
    setTitle(e.target.value);
  };

  const contentHandler = e => {
    setContent(e.target.value);
  };

  const addHandler = e => {
    e.preventDefault();
    let newItem = {
      id: data.length > 0 ? data[data.length - 1].id + 1 : 1,
      title: title,
      content: content
    };
    setData(prevData => [...prevData, newItem]);
    setTitle('');
    setContent('');
  };

  return (
    <div className='add-form'>
      <form>
        <input
          type='text'
          placeholder='title'
          value={title}
          onChange={titleHandler}
        />
        <input
          type='text'
          placeholder='content'
          value={content}
          onChange={contentHandler}
        />
        <input
          type='submit'
          value='Add'
          style={addStyle}
          onClick={addHandler}
        />
      </form>
    </div>
  );
};

export default AddForm;
