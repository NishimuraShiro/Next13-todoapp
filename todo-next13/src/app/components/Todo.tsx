import React from "react";
import { Task } from "../types/tasks";

interface TaskProps {
  task: Task;
}

const Todo = ({ task }: TaskProps) => {
  return (
    <li key={task.id} className="flex justify-between p-4">
      <span>{task.text}</span>
      <div>
        <button className="px-2">編集</button>
        <button className="px-2">削除</button>
      </div>
    </li>
  );
};
export default Todo;
