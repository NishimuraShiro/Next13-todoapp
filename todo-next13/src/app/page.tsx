// "use client";　コンソールに表示されるようになる

import { getAllTodos } from "@/api";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

export default async function Home() {
  const todos = await getAllTodos();
  return (
    <main className="flex flex-col items-center justify-center py-2 min-h-screen">
      <h1 className="text-4xl font-bold">Hello nextjs</h1>
      <div>
        <AddTask />
        <TodoList todos={todos} />
      </div>
    </main>
  );
}
