import React, { useState, useEffect } from "react";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import { useAlert } from "react-alert";

import TaskList from "./taskList";
import AddTask from "./addTask";
import TaskService from "../services/taskService";
import GetDateOnly, { dateCompare } from "../utils/dateHelper";
import Context from "../utils/context";

const TaskDashboard = () => {
  const alert = useAlert();
  const [todayTasks, setTodayTasks] = useState([]);
  const [overdueTasks, setOverdueTasks] = useState([]);

  useEffect(() => retrieveTasks(), []);

  const logError = (err) => {
    console.log(err);
    alert.error(err.message);
  };

  const retrieveTasks = () => {
    console.log(process.env.DOCKER);
    TaskService.getIncompleteTasks()
      .then((response) => {
        console.log(response);
        let data = response.data.slice();
        data.sort((a, b) => dateCompare(a.dueDate, b.dueDate));
        setTodayTasks(
          data.filter((task) => {
            return (
              GetDateOnly(task.dueDate).getTime() ===
              GetDateOnly(null).getTime()
            );
          })
        );
        setOverdueTasks(
          data.filter((task) => GetDateOnly(task.dueDate) < GetDateOnly(null))
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
