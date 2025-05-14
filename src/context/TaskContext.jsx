// src/context/TaskContext.jsx
import { createContext, useState, useCallback, useMemo } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useState("all");
  const [theme, setTheme] = useState("dark");

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const addTask = useCallback(
    (text) => {
      if (!text.trim()) return;
      setTasks((prev) => [...prev, { id: Date.now(), text, completed: false }]);
    },
    [setTasks]
  );

  const toggleTask = useCallback(
    (id) => {
      setTasks((prev) =>
        prev.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
    },
    [setTasks]
  );

  const deleteTask = useCallback(
    (id) => {
      setTasks((prev) => prev.filter((task) => task.id !== id));
    },
    [setTasks]
  );

  const onDragEnd = useCallback(
    (result) => {
      const { destination, source } = result;

      // If dropped outside the list or in the same position
      if (
        !destination ||
        (destination.droppableId === source.droppableId &&
          destination.index === source.index)
      ) {
        return;
      }

      setTasks((prev) => {
        const newTasks = [...prev];
        const [removed] = newTasks.splice(source.index, 1);
        newTasks.splice(destination.index, 0, removed);
        return newTasks;
      });
    },
    [setTasks]
  );

  const clearCompleted = useCallback(() => {
    setTasks((prev) => prev.filter((task) => !task.completed));
  }, [setTasks]);

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case "completed":
        return tasks.filter((task) => task.completed);
      case "pending":
        return tasks.filter((task) => !task.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  const value = useMemo(
    () => ({
      tasks,
      filteredTasks,
      addTask,
      toggleTask,
      deleteTask,
      clearCompleted,
      filter,
      setFilter,
      theme,
      toggleTheme,
      onDragEnd,
    }),
    [
      tasks,
      filteredTasks,
      addTask,
      toggleTask,
      deleteTask,
      clearCompleted,
      filter,
      theme,
      toggleTheme,
      onDragEnd,
    ]
  );

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}
