// src/App.jsx
import { TaskProvider, useTaskContext } from "./context/TaskContext";
import { DragDropContext } from "react-beautiful-dnd";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import FilterButtons from "./components/FilterButtons";
import ThemeToggle from "./components/ThemeToggle";
import "./styles/theme.css";
import "./styles/animations.css";

function App() {
  const { onDragEnd } = useTaskContext();

  return (
    <TaskProvider>
      <div className="app-container">
        <ThemeToggle />
        <div className="task-manager">
          <h1>Task Manager</h1>
          <AddTask />
          <FilterButtons />
          <DragDropContext onDragEnd={onDragEnd}>
            <TaskList />
          </DragDropContext>
        </div>
      </div>
    </TaskProvider>
  );
}

export default App;
