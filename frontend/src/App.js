import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import HomePage from "./components/homePage";

// import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container-lg'>
          <Route path='/' exact component={HomePage} />

          <Route path='/dashboard' exact component={TodosList} />
          <Route path='/edit/:id' component={EditTodo} />
          <Route path='/create' component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
