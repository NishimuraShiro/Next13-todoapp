import React from "react";

const AddTask = () => {
  return (
    <form>
      <input type="text" className="w-full border px-4 py-2" />
      <button className="w-full px-4 py-2">Add task</button>
    </form>
  );
};

export default AddTask;
