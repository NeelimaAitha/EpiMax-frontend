import React, { Component } from 'react';

class TaskStatusUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'pending', // Initial status of the task
    };
  }

  handleStatusChange = (newStatus) => {
    this.setState({ status: newStatus });
    // Add logic to update the status in the backend database
    console.log('Task status updated to:', newStatus);
  };

  render() {
    const { status } = this.state;

    return (
      <div className="task-status-update">
        <h3>Update Task Status</h3>
        <div>
          <label>Current Status:</label>
          <span>{status}</span>
        </div>
        <div className="status-buttons">
          <button
            className={`btn ${status === 'pending' ? 'btn-secondary' : 'btn-outline-secondary'}`}
            onClick={() => this.handleStatusChange('pending')}
          >
            Pending
          </button>
          <button
            className={`btn ${status === 'started' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => this.handleStatusChange('started')}
          >
            Started
          </button>
          <button
            className={`btn ${status === 'completed' ? 'btn-success' : 'btn-outline-success'}`}
            onClick={() => this.handleStatusChange('completed')}
          >
            Completed
          </button>
        </div>
      </div>
    );
  }
}

export default TaskStatusUpdate;
