import { FilterValueType, TaskType } from '../App';

type TodoProps = {
  title: string;
  tasks: TaskType[];
  deleteTask: (id: number) => void;
  onChangeFilter: (value: FilterValueType) => void;
};

export const ToDoList = ({ title, tasks, deleteTask, onChangeFilter }: TodoProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input type='text' />
        <button>+</button>
      </div>
      <ul>
        {tasks.map((task) => (
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
            <button onClick={() => deleteTask(task.id)}>x</button>
          </li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => {
            onChangeFilter('all');
          }}>
          All
        </button>
        <button
          onClick={() => {
            onChangeFilter('active');
          }}>
          ACtive
        </button>
        <button
          onClick={() => {
            onChangeFilter('comleted');
          }}>
          Complited
        </button>
      </div>
    </div>
  );
};
