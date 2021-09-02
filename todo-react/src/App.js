import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";

import TaskDashboard from "./components/taskDashboard";

const App = () => {
  return (
    <MDBContainer>
      <TaskDashboard />
    </MDBContainer>
  );
};

export default App;
