import React, { Component } from 'react';

class TaskAssignment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assignee: '', // Initial assignee (empty for no assignment)
    };
  }

  handleAssigneeChange = (e) => {
    this.setState({ assignee: e.target.value });
    // Add logic to update the assignee in the backend database
    console.log('Task assigned to:', e.target.value);
  };

  render() {
    const { assignee } = this.state;

    return (
      <div className="task-assignment">
        <h3>Assign Task</h3>
        <div className="form-group">
          <label>Assignee:</label>
          <input
            type="text"
            value={assignee} // Ensure 'value' is properly set and controlled
            onChange={this.handleAssigneeChange}
            className="form-control"
            placeholder="Enter assignee name"
          />
        </div>
        <button className="btn btn-primary" onClick={() => this.handleAssigneeChange('')}>
          Clear Assignment
        </button>
      </div>
    );
  }
}

export default TaskAssignment;
