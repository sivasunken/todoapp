import React, { useState, useEffect } from "react";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";

import TaskList from "./taskList";
import AddTask from "./addTask";

import TaskService from "../services/taskService";

const TaskDashboard = () => {
  const [todayTasks, setTodayTasks] = useState([]);
  const [overdueTasks, setOverdueTasks] = useState([]);

  const getDateOnly = (date) => {
    if (date) return new Date(date.toDateString());
    else return new Date(new Date().toDateString());
  };

  useEffect(() => retrieveTasks(), []);

  const retrieveTasks = () => {
    TaskService.getIncompleteTasks()
      .then((response) => {
        setTodayTasks(
          response.data.filter(
            (task) =>
              getDateOnly(task.dueDate).getTime() ===
              getDateOnly(null).getTime()
          )
        );
        setOverdueTasks(
          response.data.filter(
            (task) =>
              getDateOnly(task.dueDate).getTime() < getDateOnly(null).getTime()
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
