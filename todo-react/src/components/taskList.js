import React from "react";

import Task from "./task";

const TaskList = () => {
  return (
    <div>
      <h3>Today - 3 Tasks</h3>
      <hr />
      <Task />
      <br />
      <Task />
      <br />
      <Task />
    </div>
  );
};

export default TaskList;
