import React, { Component } from 'react';
import './TaskForm.css'; // Import component-specific styles

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: '',
      description: '',
      dueDate: '',
      errors: {}
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { taskName, description, dueDate } = this.state;

    // Simple validation
    if (!taskName || !description || !dueDate) {
      this.setState({ errors: { message: 'Please fill in all fields.' } });
      return;
    }

    // Add your logic to submit the task data to the backend
    console.log('Submitting task:', { taskName, description, dueDate });

    // Clear form and errors
    this.setState({
      taskName: '',
      description: '',
      dueDate: '',
      errors: {}
    });
  };

  render() {
    const { taskName, description, dueDate, errors } = this.state;

    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          {errors.message && <div className="error">{errors.message}</div>}
          <div className="mb-3">
            <label className="form-label">Task Name:</label>
            <input
              type="text"
              name="taskName"
              value={taskName}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description:</label>
            <textarea
              name="description"
              value={description}
              onChange={this.handleChange}
              className="form-control"
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Due Date:</label>
            <input
              type="date"
              name="dueDate"
              value={dueDate}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-submit">Add Task</button>
        </form>
      </div>
    );
  }
}

export default TaskForm;
