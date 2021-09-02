import React from "react";

import Task from "./task";

const TaskList = ({ tasks }) => {
  return (
    <div>
      <h3>Today - {tasks.length} Tasks</h3>
      <hr />
      {tasks.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </div>
  );
};

export default TaskList;
