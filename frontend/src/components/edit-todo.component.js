import React, { Component } from "react";
import axios from "axios";
import Header from "./header";

export default class EditTodo extends Component {
  constructor(props) {
    super(props);

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

  componentDidMount() {
    /**
     * To get the Previous stored Values by Id
     */
    axios
      .get("http://localhost:8000/api/action/" + this.props.match.params.id)
      .then((response) => {
        console.log(response);
        this.setState({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          task: response.data.task,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // //Update Description
  // onChangeTodoDescription(e) {
  //     this.setState({
  //         todo_description: e.target.value
  //     });
  // }

  // //Update Responsibility
  // onChangeTodoResponsible(e) {
  //     this.setState({
  //         todo_responsible: e.target.value
  //     });
  // }

  // //Update Priority
  // onChangeTodoPriority(e) {
  //     this.setState({
  //         todo_priority: e.target.value
  //     });
  // }

  // //Update Complete
  // onChangeTodoCompleted(e) {
  //     this.setState({
  //         todo_completed: !this.state.todo_completed
  //     });
  // }

  onSubmit(e) {
    e.preventDefault();

    //Create Object
    const obj = {
      id: this.state.id,
      name: this.state.name,
      email: this.state.email,
      task: this.state.task,
    };

    /**
     * Create PUT request through @Axios
     */
    axios
      .put(
        "http://localhost:8000/api/action/" + this.props.match.params.id,
        obj
      )
      .then((res) => console.log(res.data));

    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <div>
        <Header></Header>

        <h3 className='text-danger'>Update Database Value</h3>
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
              className='form-control'
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <div className='form-group'>
            <label>Email: </label>
            <input
              type='text'
              name='email'
              className='form-control'
              value={this.state.email}
              onChange={this.onChange}
            />
          </div>
          <div className='form-group'>
            <label>Task: </label>
            <input
              type='text'
              name='task'
              className='form-control'
              value={this.state.task}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div className='form-group'>
            <input
              type='submit'
              value='Update Details'
              className='btn btn-success'
            />
          </div>
          {/* </div> */}
        </form>
      </div>
    );
  }
}
