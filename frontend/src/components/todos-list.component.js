import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "./header";

const Todo = (props) => {
  return (
    <tr>
      <td className={props.todo.todo_completed ? "completed" : ""}>
        {props.todo.todo_description}
      </td>
      <td className={props.todo.todo_completed ? "completed" : ""}>
        {props.todo.todo_responsible}
      </td>
      <td className={props.todo.todo_completed ? "completed" : ""}>
        {props.todo.todo_priority}
      </td>

      <td>
        <Link to={"/edit/" + props.todo._id} className='text-danger'>
          Edit
        </Link>
      </td>
      <td>
        <button className='btn btn-danger'>Delete Todo</button>
      </td>
    </tr>
  );
};

export default class TodosList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  // Recieving the Values from Db after loading of page
  componentDidMount() {
    axios
      .get(
        "http://localhost:8000/api/action/all/" + localStorage.getItem("data")
      )
      .then((response) => {
        this.setState({ todos: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  // Recieving the Values from Db after loading of page
  componentDidUpdate() {
    axios
      .get(
        "http://localhost:8000/api/action/all/" + localStorage.getItem("data")
      )
      .then((response) => {
        this.setState({ todos: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  todoList() {
    return this.state.todos.map(function (currentTodo, i) {
      return <Todo todo={currentTodo} key={i} />;
    });
  }
  /**
   *
   * @DELETE functionalty
   */
  onDeleteClick(id) {
    console.log(id);
    axios
      .delete("http://localhost:8000/api/action/" + id)
      .then((response) => {
        console.log("Deleted Successfully");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    // Represent each rows in a table

    const todoList = this.state.todos.map((currentTodo) => (
      <tr>
        <td className={currentTodo.todo_completed ? "completed" : ""}>
          {currentTodo.id}
        </td>
        <td className={currentTodo.todo_completed ? "completed" : ""}>
          {currentTodo.name}
        </td>
        <td className={currentTodo.todo_completed ? "completed" : ""}>
          {currentTodo.email}
        </td>
        <td className={currentTodo.todo_completed ? "completed" : ""}>
          {currentTodo.task}
        </td>
        <td className={currentTodo.todo_completed ? "completed" : ""}>
          {currentTodo.role == 0 && <span>Student</span>}
          {currentTodo.role == 1 && <span>Teacher</span>}
          {currentTodo.role == 2 && <span>Admin</span>}
        </td>

        <td>
          <Link to={"/edit/" + currentTodo._id} className='text-danger'>
            Edit
          </Link>
          /
          <Link
            onClick={this.onDeleteClick.bind(this, currentTodo._id)}
            className='text-danger'
          >
            Delete
          </Link>
        </td>
      </tr>
    ));
    return (
      <div>
        <Header></Header>

        <h3 className='text-danger'>Database Value</h3>
        <table className='table table-striped' style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Task</th>
              <th>Created By</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {/* Create a Rows columns */}
            {todoList}
          </tbody>
        </table>
      </div>
    );
  }
}
