import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        // console.log(task.text)
        // console.log(task)
        
        
        <Task 
        key={index}
        text={task.text}
        category={task.category}
        onDeleteTask= {onDeleteTask}
        task={task}
        />
      ))}
    </div>
  );
}

export default TaskList;
