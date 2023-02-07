import React from "react";
import { Link } from "react-router-dom";
import '../Styless/Navbar.css';

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="container">
          <div className="flex_row">
            <nav className="nav_all">
              <ul className="nav_ul">
              <Link to="/" className="link">
                  <li>Registration</li>
                </Link>
                <Link to="/academic" className="link">
                  <li>Academic</li>
                </Link>
                <Link to="/course" className="link">
                  <li>Course</li>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
