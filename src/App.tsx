import React, { useEffect, useState } from 'react';
import { ToDoList } from './components/TodoList';

import './style/app.css';

export type FilterValueType = 'all' | 'comleted' | 'active';

export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

let tasks1 = [
  { id: 1, title: 'css', isDone: true },
  { id: 2, title: 'js', isDone: true },
  { id: 3, title: 'React', isDone: false },
  { id: 4, title: 'Redux', isDone: false },
];

export const App = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [filter, setFilter] = useState<FilterValueType>('all');

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const onChangeFilter = (filterValue: FilterValueType) => {
    setFilter(filterValue);
  };

  let filteredTasks = tasks;
  if (filter === 'comleted') {
    filteredTasks = tasks.filter((task) => task.isDone === true);
  }
  if (filter === 'active') {
    filteredTasks = tasks.filter((task) => task.isDone === false);
  }

  useEffect(() => {
    setTasks(tasks1);
  }, []);

  return (
    <div className='App'>
      <ToDoList
        title='What to learn'
        tasks={filteredTasks}
        deleteTask={(id) => {
          deleteTask(id);
        }}
        onChangeFilter={(value: FilterValueType) => {
          onChangeFilter(value);
        }}
      />
    </div>
  );
};
