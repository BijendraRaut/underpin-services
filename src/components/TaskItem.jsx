// src/components/TaskItem.jsx
import { memo, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { Draggable } from "react-beautiful-dnd";

const TaskItem = memo(({ task, index }) => {
  const { toggleTask, deleteTask, theme } = useContext(TaskContext);

  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`task-item ${theme} ${task.completed ? "completed" : ""}`}
        >
          <div className="task-content">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="task-checkbox"
            />
            <span className="task-text">{task.text}</span>
          </div>
          <button
            onClick={() => deleteTask(task.id)}
            className="delete-button"
            aria-label="Delete task"
          >
            ×
          </button>
        </div>
      )}
    </Draggable>
  );
});

export default TaskItem;
