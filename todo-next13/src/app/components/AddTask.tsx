"use client";

import { addTodo } from "@/api";
import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [empty, setEmpty] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (taskTitle.trim() === "") {
      setEmpty(true);
    } else {
      await addTodo({ id: uuidv4(), text: taskTitle });
      setTaskTitle("");
      setEmpty(false);
    }
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
      {empty && <p className="text-red-500">入力欄が空欄です。</p>}
      <button className="w-full px-4 py-2">Add task</button>
    </form>
  );
};

export default AddTask;
