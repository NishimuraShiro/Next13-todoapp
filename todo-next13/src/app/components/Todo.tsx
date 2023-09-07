"use client";

import React, { useEffect, useRef, useState } from "react";
import { Task } from "../types/tasks";
import { deleteTodo, editTodo } from "@/api";

interface TaskProps {
  task: Task;
}

const Todo = ({ task }: TaskProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskTitle, setEditedTaskTitle] = useState(task.text);
  const handleEdit = async () => {
    setIsEditing(true);
  };
  const handleSave = async () => {
    // API連携部分
    await editTodo(task.id, editedTaskTitle);
    setIsEditing(false);
  };
  const handleDelete = async () => {
    // API連携部分
    await deleteTodo(task.id);
  };
  useEffect(() => {
    if (isEditing) {
      ref.current?.focus();
    }
  }, [isEditing]);
  return (
    <li key={task.id} className="flex justify-between p-4">
      {isEditing ? (
        <input
          ref={ref}
          type="text"
          value={editedTaskTitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEditedTaskTitle(e.target.value)
          }
        />
      ) : (
        <span>{task.text}</span>
      )}
      <div>
        {isEditing ? (
          <button className="px-2" onClick={handleSave}>
            保存
          </button>
        ) : (
          <button className="px-2" onClick={handleEdit}>
            編集
          </button>
        )}

        <button className="px-2" onClick={handleDelete}>
          削除
        </button>
      </div>
    </li>
  );
};
export default Todo;
