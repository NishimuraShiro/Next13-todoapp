import { Task } from "@/types";
import React from "react";

interface TodoProps {
  todo: Task;
}

const Todo = ({ todo }: TodoProps) => {
  return (
    <li key={todo.id} className="flex justify-between p-4">
      <span>{todo.text}</span>
      <div>
        <button className="px-2">編集</button>
        <button className="px-2">削除</button>
      </div>
    </li>
  );
};

export default Todo;
