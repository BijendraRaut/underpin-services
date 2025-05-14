// src/components/TaskList.jsx
import { useContext } from "react";
import { Droppable } from "react-beautiful-dnd";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

function TaskList() {
  const { filteredTasks, clearCompleted, theme } = useContext(TaskContext);

  return (
    <div className={`task-list-container ${theme}`}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="task-list"
          >
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task, index) => (
                <TaskItem key={task.id} task={task} index={index} />
              ))
            ) : (
              <p className="empty-message">No tasks found</p>
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      {filteredTasks.some((task) => task.completed) && (
        <button onClick={clearCompleted} className={`clear-completed ${theme}`}>
          Clear Completed
        </button>
      )}
    </div>
  );
}

export default TaskList;
