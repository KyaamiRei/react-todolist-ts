import React, { useEffect, useState } from 'react';
import { v1 } from 'uuid';

import { ToDoList } from './components/TodoList';

import './style/app.css';

export type FilterValueType = 'all' | 'completed' | 'active';

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

let tasks1 = [
  { id: v1(), title: 'css', isDone: true },
  { id: v1(), title: 'js', isDone: true },
  { id: v1(), title: 'React', isDone: false },
  { id: v1(), title: 'Redux', isDone: false },
];

console.log(tasks1);

export const App = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [filter, setFilter] = useState<FilterValueType>('all');

  const addTask = (newTaskTitle: string) => {
    const newTask = {
      id: v1(),
      title: newTaskTitle,
      isDone: false,
    };

    setTasks((prev) => [newTask, ...prev]);
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const onChangeFilter = (filterValue: FilterValueType) => {
    setFilter(filterValue);
  };

  let filteredTasks = tasks;
  if (filter === 'completed') {
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
        addTask={(newTaskTitle) => addTask(newTaskTitle)}
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
