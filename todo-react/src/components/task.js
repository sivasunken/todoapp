import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import React, { useContext } from "react";

import GetDateOnly from "../utils/dateHelper";
import Context from "../utils/context";

const Task = ({ task }) => {
  const context = useContext(Context);

  return (
    <MDBRow>
      <MDBCol className="m-2">
        <div className="d-flex flex-row bg-light border border-dark border-2 rounded-pill shadow-3 ">
          <span className="flex-grow-1 align-self-center mlr-3px">
            {task.description}
          </span>
          {GetDateOnly(task.dueDate) < GetDateOnly(null).getTime() ? (
            <span className="align-self-center mlr-3px">{task.dueDate}</span>
          ) : null}
          <input
            type="checkbox"
            className="checkbox-round align-self-center mlr-3px border-dark"
            onChange={() => context.completeTask(task)}
            value={task.completed}
          />
        </div>
      </MDBCol>
    </MDBRow>
  );
};

export default Task;
