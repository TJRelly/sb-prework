function findHighestPriorityTodo(arrOfObj) {
  let output = ["", 0]
  //iterate todos
  for(const obj of arrOfObj) {
    //find highest priority
    //find associated task
    if(obj.priority > output[1]) output = [obj.task, obj.priority]
  }
  //return arr with task, priority
  return output
}

let todos = [{
  task: "Eat",
  priority: 18,
},
{
  task: "Sleep",
  priority: 22,
},
{
  task: "Solve problems",
  priority: 17,
}];

findHighestPriorityTodo(todos); // ["Sleep", 22]

todos = [{
  task: "Task 1",
  priority: 1,
},
{
  task: "Task 2",
  priority: 2,
},
{
  task: "Task 3",
  priority: 3,
}];

findHighestPriorityTodo(todos); // ["Task 3", 3]

