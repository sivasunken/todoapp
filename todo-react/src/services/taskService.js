import http from "./httpCommon";

class TaskDataService {
  //Adding Only required endpoints
  getIncompleteTasks() {
    return http.get("/tasks/incomplete");
  }

  addTask(task) {
    return http.post("/tasks", task);
  }

  updateTask(id, task) {
    return http.put(`/tasks/${id}`, task);
  }
}

export default new TaskDataService();
