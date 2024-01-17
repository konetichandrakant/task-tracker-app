import React from 'react';

const TaskItem = ({ task, deleteTask, markAsCompleted }) => {
  return (
    <li className={task.completed ? 'completed' : ''}>
      <span>{task.name}</span>
      &nbsp;&nbsp;
      <span>{task.dateAdded}</span>
      <div>
        <button onClick={() => markAsCompleted(task.id)}>
          {task.completed ? 'Mark Incomplete' : 'Mark Completed'}
        </button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </li>
  );
};

export default TaskItem;
