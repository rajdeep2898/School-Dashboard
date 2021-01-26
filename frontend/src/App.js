import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-todo";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import HomePage from "./components/homePage";

// import logo from "./logo.png";
class NoMatch extends Component {
  render() {
    return <div>404 page</div>;
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container-lg'>
          <Route path='/' exact component={HomePage} />

          <Route path='/dashboard' exact component={TodosList} />
          <Route path='/edit/:id' component={EditTodo} />
          <Route path='/create' component={CreateTodo} />
          {/* <Route component={NoMatch} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
