import { Task } from "./app/types/tasks";

export const getAllTodos = async (): Promise<Task[]> => {
  const res = await fetch("http://localhost:3001/tasks", {
    cache: "no-store", //SSR(Server Side Rendering) or CSR(Client Server Rendering)
    // SSR：初回読み込み時が早い
    // CSR：２回目以降の読み込みが早い
    // cache: "force-cache"　// SSG(Static Site Generation)
    // 頻繁にデータが更新されたりするものはSSGに不適切
  });
  const todos = await res.json();
  return todos;
};

export const addTodo = async (todo: Task): Promise<Task> => {
  const res = await fetch("http://localhost:3001/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // headersで指定するコンテンツの型
    },
    body: JSON.stringify(todo), // 追加する内容
  });
  const newTodo = await res.json();
  return newTodo;
};

export const editTodo = async (id: string, newText: string): Promise<Task> => {
  const res = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json", // headersで指定するコンテンツの型
    },
    body: JSON.stringify({ text: newText }), // 追加する内容
  });
  const updatedTodo = await res.json();
  return updatedTodo;
};

export const deleteTodo = async (id: string): Promise<Task> => {
  const res = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json", // headersで指定するコンテンツの型
    },
  });
  const deleteTodo = await res.json();
  return deleteTodo;
};
