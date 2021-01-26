// import React, { Component } from "react";
import React, { useState, useEffect } from "react";
import "../index.css";

import { Link, Redirect } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import Header from "./header";
import axios from "axios";

const HomePage = () => {
  const [redirect, setRedirect] = useState(false);
  const onSelect = (data) => {
    localStorage.setItem("data", data);
    // return <Redirect to='/dashboard' />;
    setRedirect(true);
  };
  const performRedirect = () => {
    if (redirect) {
      return <Redirect to='/dashboard' />;
    }
  };
  return (
    <div>
      {performRedirect()}
      <div className='container-fluid'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <Link to='../' className='navbar-brand'>
            School Database App
          </Link>
          <div className='collpase nav-collapse'>
            <ul className='navbar-nav mr-auto'>
              <li className='navbar-item'></li>
              <li className='navbar-item'></li>
            </ul>
          </div>
        </nav>
        <div className='mt-5 jubotron text-center'>
          <div className='col'>
            <div className='row'>
              <div className='col'>
                <button
                  className='btn btn-block btn-outline-success mt-2 mb-2'
                  onClick={() => onSelect(2)}
                >
                  Admin
                </button>
              </div>
              <div className='col'>
                <button
                  className='btn btn-block btn-outline-success mt-2 mb-2'
                  onClick={() => onSelect(1)}
                >
                  Teacher
                </button>
              </div>
              <div className='col'>
                <button
                  className='btn btn-block btn-outline-success mt-2 mb-2'
                  onClick={() => onSelect(0)}
                >
                  Student
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
