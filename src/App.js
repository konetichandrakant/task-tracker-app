import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  const [tasks, setTasks] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    if (tasks !== null)
      localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const markAsCompleted = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const filterTasks = (status) => {
    setFilter(status);
  };

  const filteredTasks = tasks !== null && tasks.filter((task) =>
    filter === 'all' ? true : filter === 'completed' ? task.completed : !task.completed
  );

  return (
    <div className="app-container">
      <h1>Task Tracker</h1>
      {
        tasks && (
          <>
            <TaskForm addTask={addTask} />
            <TaskList
              tasks={filteredTasks}
              setTasks={setTasks}
              deleteTask={deleteTask}
              markAsCompleted={markAsCompleted}
              filterTasks={filterTasks}
            />
          </>
        )
      }
    </div>
  );
};

export default App;
