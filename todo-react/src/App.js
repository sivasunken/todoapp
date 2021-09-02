import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";

import TaskDashboard from "./components/taskDashboard";

const App = () => {
  return (
    <MDBContainer fluid className="bg-light">
      <TaskDashboard />
    </MDBContainer>
  );
};

export default App;
