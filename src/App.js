// src/App.jsx
import { TaskProvider } from "./context/TaskContext";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import FilterButtons from "./components/FilterButtons";
import ThemeToggle from "./components/ThemeToggle";
import "./styles/theme.css";
import "./styles/animations.css";

function App() {
  return (
    <TaskProvider>
      <div className="app-container">
        <ThemeToggle />
        <div className="task-manager">
          <h1>Task Manager</h1>
          <AddTask />
          <FilterButtons />
          <TaskList />
        </div>
      </div>
    </TaskProvider>
  );
}

export default App;
