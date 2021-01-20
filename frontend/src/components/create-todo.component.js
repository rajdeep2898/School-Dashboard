import React, { Component } from "react";
import axios from "axios";
import Header from "./header";

export default class CreateTodo extends Component {
  constructor(props) {
    super(props);

    // this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
    // this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      id: "",
      name: "",
      email: "",
      task: "",
    };
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  //   // Change Description Value
  //   onChangeTodoDescription(e) {
  //     this.setState({
  //       todo_description: e.target.value,
  //     });
  //   }

  //   // Change Responsibility Value
  //   onChangeTodoResponsible(e) {
  //     this.setState({
  //       todo_responsible: e.target.value,
  //     });
  //   }

  //   // Change Priority Value
  //   onChangeTodoPriority(e) {
  //     this.setState({
  //       todo_priority: e.target.value,
  //     });
  //   }

  onSubmit(e) {
    e.preventDefault();

    //Self TEsting
    console.log(`Form submitted:`);
    console.log(`Todo Description: ${this.state.todo_description}`);
    console.log(`Todo Responsible: ${this.state.todo_responsible}`);
    console.log(`Todo Priority: ${this.state.todo_priority}`);
    console.log(`Todo Completed: ${this.state.todo_completed}`);

    //Create a new Object
    const newTodo = {
      id: this.state.id,
      name: this.state.name,
      email: this.state.email,
      task: this.state.task,
    };
    /**
     * Making Post request using @Axios
     * */

    axios
      .post(
        "http://localhost:8000/api/action/" + localStorage.getItem("data"),
        newTodo
      )
      .then((res) => console.log(res.data));
    this.props.history.push("/dashboard");

    //Reset the State variables
    this.setState({
      id: "",
      name: "",
      email: "",
      task: "",
    });
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <Header></Header>
        <h3 className='text-danger'>Create Database Value</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Id: </label>
            <input
              type='text'
              name='id'
              className='form-control border-danger'
              value={this.state.id}
              onChange={this.onChange}
            />
          </div>
          <div className='form-group'>
            <label>Name: </label>
            <input
              type='text'
              name='name'
              className='form-control border-danger'
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <div className='form-group'>
            <label>email: </label>
            <input
              type='email'
              name='email'
              className='form-control border-danger'
              value={this.state.email}
              onChange={this.onChange}
            />
          </div>
          <div className='form-group'>
            <label>Task: </label>
            <input
              type='text'
              name='task'
              className='form-control border-danger'
              value={this.state.task}
              onChange={this.onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='submit'
              value='Create Details'
              className='btn btn-danger'
            />
          </div>
        </form>
      </div>
    );
  }
}
