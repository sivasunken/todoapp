import React from "react";

import TaskList from "./taskList";
import AddTask from "./addTask";

const TaskDashboard = () => {
  return (
    <div>
      Task Dashboard
      <br />
      <TaskList />
      <br />
      <TaskList />
      <br />
      <AddTask />
    </div>
  );
};

export default TaskDashboard;
