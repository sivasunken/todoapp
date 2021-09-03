import React from "react";

import Task from "./task";

const TaskList = ({ tasks, header }) => {
  return (
    <div>
      <h3>
        {header} - {tasks.length} Tasks
      </h3>
      <hr />
      {tasks.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </div>
  );
};

export default TaskList;
