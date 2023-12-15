import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Task({ task, handleDelete, handleUpdate, handleEdit }) {
  const [currentTask, setTask] = useState({
    ...task,
    createdAt: task.createdAt || new Date(), // Set createdAt if not already present
  });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    handleUpdate(currentTask.id, currentTask);
  }, [currentTask]);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveEdit = () => {
    setEditing(false);
  };

  const handleTaskCompletion = () => {
    setTask({ ...currentTask, done: !currentTask.done, completedAt: new Date() });
  };

  return (
    <div className={task.done ? "task done" : "task undone"}>
      {editing ? (
        <input
          type="text"
          value={currentTask.text}
          onChange={(e) => setTask({ ...currentTask, text: e.target.value })}
          onBlur={handleSaveEdit}
          autoFocus
        />
      ) : (
        <>
          <p>{task.text}</p>
          <div className="task-actions">
            <FaCheck size={25} onClick={handleTaskCompletion} />
            <FaTrash size={25} onClick={() => handleDelete(task.id)} />
            <FaEdit size={25} onClick={handleEditClick} />
            <div className="creation">
            <p className="time">
              Created at: {new Date(currentTask.createdAt).toLocaleString()}
            </p>
            {currentTask.done && currentTask.completedAt && (
              <p className="time">
                Completed at: {new Date(currentTask.completedAt).toLocaleString()}
              </p>
            )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}