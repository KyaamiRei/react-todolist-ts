type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

type TodoProps = {
  title: string;
  tasks: TaskType[];
};

export const ToDoList = ({ title, tasks }: TodoProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input type='text' />
        <button>+</button>
      </div>
      <ul>
        {tasks.map((item) => (
          <li id={item.title}>
            <input
              type='checkbox'
              checked={item.isDone}
            />
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
      <div>
        <button>All</button>
        <button>ACtive</button>
        <button>Complited</button>
      </div>
    </div>
  );
};
