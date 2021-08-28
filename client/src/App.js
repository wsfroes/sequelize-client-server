import './App.css';
import { Fragment } from 'react';

//components
import InputTodo from './components/InputTodo';
import ListTodo from './components/ListTodos';
import Company from './components/InputCompany';
import ListCompany from './components/ListCompany';

function App() {
  return (
    <Fragment>
      <div className="container">
        <Company />
        <ListCompany />
      </div>
    </Fragment>
  );
}

export default App;
