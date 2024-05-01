import React from 'react';
import TaskForm from './components/TaskForm';
import TaskAssignment from './components/TaskAssignment';
import TaskStatusUpdate from './components/TaskStatusUpdate';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Task Management System</h1>
      </header>
      <main className="App-content">
        <TaskForm />
        <TaskAssignment />
        <TaskStatusUpdate />
      </main>
    </div>
  );
}

export default App;
