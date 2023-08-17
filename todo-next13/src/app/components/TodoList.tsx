import React from "react";

const TodoList = () => {
  return (
    <ul className="space-y-3">
      <li className="flex justify-between p-4">
        <span>勉強</span>
        <div>
          <button className="px-2">編集</button>
          <button className="px-2">削除</button>
        </div>
      </li>
      <li className="flex justify-between p-4">
        <span>洗濯</span>
        <div>
          <button className="px-2">編集</button>
          <button className="px-2">削除</button>
        </div>
      </li>
      <li className="flex justify-between p-4">
        <span>買い物</span>
        <div>
          <button className="px-2">編集</button>
          <button className="px-2">削除</button>
        </div>
      </li>
    </ul>
  );
};

export default TodoList;
