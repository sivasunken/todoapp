import http from "./http-common";

class TaskDataService {
  //Adding Only required endpoints
  getIncompleteTasks() {
    return http.get("/task/incomplete");
  }

  addTask(task) {
    return http.post("/task", task);
  }

  updateTask(id, task) {
    return http.put(`/task/${id}`, task);
  }
}

export default new TaskDataService();
