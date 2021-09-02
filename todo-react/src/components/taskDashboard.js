import React from "react";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";

import TaskList from "./taskList";
import AddTask from "./addTask";

const TaskDashboard = () => {
  return (
    <div>
      <h6>My To-Do App</h6>
      <br />
      <TaskList />
      <br />
      <TaskList />
      <br />
      <MDBRow className="addTask-row">
        <MDBCol className="text-center">
          <AddTask />
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default TaskDashboard;
