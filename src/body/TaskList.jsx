import React from "react";
import "./body.css";
import Task from "./Task";

export default function TaskList({ tasks, handleUpdate, handleDelete, handleEdit }) {
  const totalTasks = tasks.length;

  const calculatePercentage = () => {
    const doneTasks = tasks.filter((task) => task.done).length;
    const percentage = (doneTasks / totalTasks) * 100;
    return isNaN(percentage) ? 0 : percentage.toFixed(2);
  };

  return (
    <>
    <div className="percentage">
        Total Percentage Done: {calculatePercentage()}%
    </div>
    <div className="tlist">
      {tasks.map((task) => (
        <Task
          task={task}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          handleEdit={handleEdit}
          key={task.id}
        />
      ))}
    </div>
    </>
  );
}