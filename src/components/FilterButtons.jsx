// src/components/FilterButtons.jsx
import { useContext, memo } from "react";
import { TaskContext } from "../context/TaskContext";

const FilterButtons = memo(() => {
  const { filter, setFilter, theme } = useContext(TaskContext);

  return (
    <div className={`filter-buttons ${theme}`}>
      <button
        onClick={() => setFilter("all")}
        className={filter === "all" ? "active" : ""}
      >
        All
      </button>
      <button
        onClick={() => setFilter("pending")}
        className={filter === "pending" ? "active" : ""}
      >
        Pending
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={filter === "completed" ? "active" : ""}
      >
        Completed
      </button>
    </div>
  );
});

export default FilterButtons;
