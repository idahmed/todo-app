import React from 'react';
import './App.css';
import Navbar from './layouts/Navbar';
import { DataProvider } from './todo/TodosContext';
import TodoMain from './todo/TodoMain';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './layouts/Home';

function App() {
  return (
    <DataProvider>
      <Router>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route path='/todos' component={TodoMain} />
            <Route path='/' exact component={Home} />
          </Switch>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
