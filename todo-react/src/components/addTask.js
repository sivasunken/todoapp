import {
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalHeader,
  MDBModalTitle,
} from "mdb-react-ui-kit";
import React, { useState, useContext } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import { formatDate, parseDate } from "react-day-picker/moment";

import Context from "../utils/context";

const AddTask = () => {
  const context = useContext(Context);

  const [showModal, setShowModal] = useState(false);
  const [dueDate, setDueDate] = useState(new Date());

  const toggleShow = () => setShowModal(!showModal);

  const handleSubmit = (event) => {
    event.preventDefault();
    context.addTask({
      description: event.target.description.value,
      dueDate: dueDate,
    });

    event.target.description.value = "";
    setDueDate(new Date());
    setShowModal(false);
  };

  return (
    <div>
      <MDBBtn outline floating onClick={toggleShow}>
        <MDBIcon fas icon="plus fa-2x" />
      </MDBBtn>
      <MDBModal
        show={showModal}
        getOpenState={(e) => setShowModal(e)}
        tabIndex="-1"
      >
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <form onSubmit={handleSubmit}>
                <MDBInput
                  label="Description"
                  id="description"
                  textarea
                  row={4}
                />

                <div className="d-flex m-2">
                  <label className="p-1">Due Date : </label>
                  <DayPickerInput
                    id="dueDate"
                    value={dueDate}
                    onDayChange={(day) => setDueDate(day)}
                    dayPickerProps={{
                      todayButton: "Today",
                      showOutsideDays: true,
                    }}
                    format="YYYY/MM/DD"
                    formatDate={formatDate}
                    parseDate={parseDate}
                    placeholder="Due Date"
                  />
                </div>

                <div className="d-flex">
                  <MDBBtn className="flex-fill" color="success" type="submit">
                    Add
                  </MDBBtn>
                </div>
              </form>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
};

export default AddTask;
