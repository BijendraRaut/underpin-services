// src/components/AddTask.jsx
import { useContext, useState, useCallback } from "react";
import { TaskContext } from "../context/TaskContext";

function AddTask() {
  const { addTask, theme } = useContext(TaskContext);
  const [taskText, setTaskText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!taskText.trim()) {
        setError("Task cannot be empty");
        return;
      }
      addTask(taskText);
      setTaskText("");
      setError("");
    },
    [taskText, addTask]
  );

  return (
    <form onSubmit={handleSubmit} className={`add-task ${theme}`}>
      <div className="input-container">
        <input
          type="text"
          value={taskText}
          onChange={(e) => {
            setTaskText(e.target.value);
            if (error) setError("");
          }}
          placeholder="Add a new task..."
          className={error ? "error" : ""}
        />
        <button type="submit" className="add-button">
          <span className="plus-icon">+</span>
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
}

export default AddTask;
