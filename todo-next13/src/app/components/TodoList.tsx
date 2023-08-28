import { Task } from "../types/tasks";
import Todo from "./Todo";
import React from "react";

interface TodoListProps {
  tasks: Task[];
}
const TodoList = ({ tasks }: TodoListProps) => {
  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <Todo key={task.id} task={task} />
      ))}
    </ul>
  );
};
export default TodoList;
