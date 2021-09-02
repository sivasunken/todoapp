import React, { useState, useEffect } from "react";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";

import TaskList from "./taskList";
import AddTask from "./addTask";
import TaskService from "../services/taskService";
import { getDateOnly } from "../utils/dateHelper";

const TaskDashboard = () => {
  const [todayTasks, setTodayTasks] = useState([]);
  const [overdueTasks, setOverdueTasks] = useState([]);

  useEffect(() => retrieveTasks(), []);

  const retrieveTasks = () => {
    TaskService.getIncompleteTasks()
      .then((response) => {
        console.log(response.data);
        setTodayTasks(
          response.data.filter((task) => {
            console.log(
              `${getDateOnly(task.dueDate).getTime()} ${getDateOnly(
                null
              ).getTime()}`
            );
            return (
              getDateOnly(task.dueDate).getTime() ===
              getDateOnly(null).getTime()
            );
          })
        );
        setOverdueTasks(
          response.data.filter(
            (task) => getDateOnly(task.dueDate) < getDateOnly(null)
          )
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h6>My To-Do App</h6>
      <br />
      <TaskList tasks={todayTasks} />
      <br />
      <TaskList tasks={overdueTasks} />
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
