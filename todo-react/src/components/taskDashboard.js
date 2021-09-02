import React, { useState, useEffect } from "react";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import { useAlert } from "react-alert";

import TaskList from "./taskList";
import AddTask from "./addTask";
import TaskService from "../services/taskService";
import GetDateOnly from "../utils/dateHelper";
import Context from "../utils/context";

const TaskDashboard = () => {
  const alert = useAlert();
  const [todayTasks, setTodayTasks] = useState([]);
  const [overdueTasks, setOverdueTasks] = useState([]);

  useEffect(() => retrieveTasks(), []);

  const logError = (err) => {
    alert.error(err);
    console.log(err);
  };

  const retrieveTasks = () => {
    TaskService.getIncompleteTasks()
      .then((response) => {
        console.log(response.data);
        setTodayTasks(
          response.data.filter((task) => {
            return (
              GetDateOnly(task.dueDate).getTime() ===
              GetDateOnly(null).getTime()
            );
          })
        );
        setOverdueTasks(
          response.data.filter(
            (task) => GetDateOnly(task.dueDate) < GetDateOnly(null)
          )
        );
      })
      .catch((err) => logError(err));
  };

  const completeTask = (task) => {
    TaskService.updateTask(task.id, task)
      .then(() => retrieveTasks())
      .catch((err) => logError(err));
  };

  const addTask = (task) => {
    TaskService.addTask(task)
      .then(() => retrieveTasks())
      .catch((err) => logError(err));
  };

  return (
    <Context.Provider
      value={{
        completeTask: (task) => completeTask(task),
        addTask: (task) => addTask(task),
      }}
    >
      <h6>My To-Do App</h6>
      <br />
      <TaskList tasks={todayTasks} header="Today" />
      <br />
      <TaskList tasks={overdueTasks} header="Overdue" />
      <br />
      <MDBRow className="addTask-row">
        <MDBCol className="text-center">
          <AddTask />
        </MDBCol>
      </MDBRow>
    </Context.Provider>
  );
};

export default TaskDashboard;
