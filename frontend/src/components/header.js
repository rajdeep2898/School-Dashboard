import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <Link to='../' className='navbar-brand'>
        School Database App
      </Link>
      <div className='collpase nav-collapse'>
        <ul className='navbar-nav mr-auto'>
          <li className='navbar-item'>
            <Link to='/dashboard' className='nav-link text-danger'>
              Dashboard
            </Link>
          </li>
          <li className='navbar-item'>
            <Link to='/create' className='nav-link text-danger'>
              Create Entry
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
