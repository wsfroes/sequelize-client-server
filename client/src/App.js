import './App.css';
import { Fragment } from 'react';

//components
import InputTodo from './components/InputTodo';
import ListTodo from './components/ListTodos';

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodo />
      </div>
    </Fragment>
  );
}

export default App;
