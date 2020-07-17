class ListOfTask {
  constructor() {
    this.ArrayList = [];
  }
  addNewTask = (task) => {
    this.ArrayList = [...this.ArrayList, task];
  };
}
export default ListOfTask;
