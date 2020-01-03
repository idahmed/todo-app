import React, { createContext, useState } from 'react';

export const dataContext = createContext();

export const DataProvider = props => {
  const [data, setData] = useState([
    {
      id: 1,
      title: 'test item',
      content: 'this is just a test todo.'
    }
  ]);
  return (
    <dataContext.Provider value={[data, setData]}>
      {props.children}
    </dataContext.Provider>
  );
};
