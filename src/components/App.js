import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css'; // Global styles
import TaskForm from './components/TaskForm';
import TaskAssignment from './components/TaskAssignment';
import TaskStatusUpdate from './components/TaskStatusUpdate';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="mt-5 mb-4">Task Management System</h1>
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h3 className="card-title">Add New Task</h3>
                <TaskForm />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h3 className="card-title">Assign Task</h3>
                <TaskAssignment />
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Update Task Status</h3>
                <TaskStatusUpdate />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
