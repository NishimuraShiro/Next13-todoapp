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
