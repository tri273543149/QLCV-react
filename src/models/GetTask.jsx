import Task from "./Task";
import ListOfTask from "./ListOfTask";
import TaskData from "./TaskData";

let listOfTask = new ListOfTask();

for (let task of TaskData) {
  let id = task.id;
  let name = task.name;
  let labelArr = task.labelArr;
  let priority = task.priority;
  let status = task.status;
  let memberIDArr = task.memberIDArr;
  let description = task.description;

  let newTask = new Task(
    id,
    name,
    labelArr,
    priority,
    status,
    memberIDArr,
    description
  );

  listOfTask.addNewTask(newTask);
}

export default listOfTask;
