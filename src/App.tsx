import React from 'react';
import { ToDoList } from './components/TodoList';

import './style/app.css';

let tasks1 = [
  { id: 1, title: 'css', isDone: true },
  { id: 2, title: 'js', isDone: true },
  { id: 3, title: 'React', isDone: false },
];

let tasks2 = [
  { id: 1, title: 'Xxx', isDone: true },
  { id: 2, title: 'qwedf', isDone: true },
  { id: 3, title: 'QWEQ', isDone: false },
];

export const App = () => {
  return (
    <div className='App'>
      <ToDoList title='What to learn' tasks={tasks1}/>
      <ToDoList title='Movies' tasks={tasks2}/>
    </div>
  );
};
