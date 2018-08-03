import React from 'react';
import './App.css';
import { inject, observer } from 'mobx-react';
import TodoView from './components/TodoView';
import TodoCounterView from './components/TodoCounterView';

const randomId = () => Math.floor(Math.random() * 1000).toString(36);

@inject('store')
const App = observer(props =>
    <div>
      <button onClick={e => props.store.addTodo(randomId(), "New Task")}>
        Add Task
      </button>
      {props.store.todos
        .values()
        .map(todo => <TodoView store={props.store} todo={todo} />)}
      <TodoCounterView store={props.store} />
    </div>
  );

export default App;