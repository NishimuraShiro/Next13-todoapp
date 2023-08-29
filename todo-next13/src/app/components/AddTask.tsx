"use client";

import { addTodo } from "@/api";
import { ChangeEvent, FormEvent, useState } from "react";

const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await addTodo({ id: "4", text: taskTitle });
    setTaskTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-full border px-4 py-2"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTaskTitle(e.target.value)
        }
        value={taskTitle}
      />
      <button className="w-full px-4 py-2">Add task</button>
    </form>
  );
};

export default AddTask;
