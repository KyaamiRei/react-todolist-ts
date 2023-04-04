import { ChangeEvent, KeyboardEvent, useState } from 'react';

import { FilterValueType, TaskType } from '../App';

type TodoProps = {
  title: string;
  tasks: TaskType[];
  addTask: (newTaskTitle: string) => void;
  deleteTask: (id: string) => void;
  onChangeFilter: (value: FilterValueType) => void;
};

export const ToDoList = ({ title, tasks, addTask, deleteTask, onChangeFilter }: TodoProps) => {
  const [newTaskTitle, setNewTaskTitle] = useState<string>('');

  const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.target.value);
  };

  const onKeyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      addTask(newTaskTitle);
      setNewTaskTitle('');
    }
  };

  const addNewTask = () => {
    addTask(newTaskTitle);
    setNewTaskTitle('');
  };

  const onAllClickHandler = () => onChangeFilter('all');
  const onActiveClickHandler = () => onChangeFilter('active');
  const onCompletedClickHandler = () => onChangeFilter('completed');

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input
          type='text'
          value={newTaskTitle}
          onChange={onNewTitleChangeHandler}
          onKeyDown={onKeyHandler}
        />
        <button onClick={addNewTask}>+</button>
      </div>
      <ul>
        {tasks.map((task) => {
          const onDeleteTaskHandler = () => deleteTask(task.id);

          return (
            <li
              key={task.id}
              id={task.title}>
              <input
                onChange={() => {
                  console.log('click');
                }}
                type='checkbox'
                checked={task.isDone}
              />
              <span>{task.title}</span>
              <button onClick={onDeleteTaskHandler}>x</button>
            </li>
          );
        })}
      </ul>
      <div>
        <button onClick={onAllClickHandler}>All</button>
        <button onClick={onActiveClickHandler}>Active</button>
        <button onClick={onCompletedClickHandler}>Complited</button>
      </div>
    </div>
  );
};
