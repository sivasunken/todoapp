import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import React from "react";

const Task = () => {
  return (
    <MDBRow>
      <MDBCol className="m-2">
        <div className="d-flex flex-row bg-light border border-dark border-2 rounded-pill shadow-5 ">
          <span className="flex-grow-1 align-self-center mlr-3px">
            Description
          </span>
          <span className="align-self-center mlr-3px">DueDate</span>
          <input
            type="checkbox"
            className="checkbox-round align-self-center mlr-3px border-dark"
          />
        </div>
      </MDBCol>
    </MDBRow>
  );
};

export default Task;
