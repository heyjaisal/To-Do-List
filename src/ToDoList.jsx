import React, { useState } from 'react';

function Todolist() {
  const [tasks, setTasks] = useState(["Eat Breakfast", "Take a Shower", "Go for a walk"]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleInput = (event) => setNewTask(event.target.value);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks(prevTasks => editIndex !== null 
        ? prevTasks.map((task, i) => i === editIndex ? newTask : task)
        : [...prevTasks, newTask]);
      setNewTask("");
      setEditIndex(null);
    }
  };
  const deleteTask = (index) => setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));

  return (
    <div className="todolist">
      <h1>To Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={handleInput}
        />
        <button className="add" onClick={addTask}>{editIndex !== null ? 'Save' : 'Add'}</button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
            <button className="edit-button" onClick={() => {
              setNewTask(task);
              setEditIndex(index);
            }}>Edit</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Todolist;