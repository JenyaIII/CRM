import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";

const NavBar = ({ setEditing, history }) => {
  const [hasToken, setToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("Token");
    setToken(token);
  }, []);
  let isUserLoged = useSelector(state => state.postReducer.isUserLoged);

  const exit = () => {
    localStorage.removeItem("Token");
    isUserLoged = false;
    history.push("/");
    window.location.reload();
  };

  return (
    <>
      {isUserLoged || hasToken ? (
        <nav>
          <div className="nav-wrapper col s12 m4 l7">
            <div className="nav-logo">
              <span className="brand-logo"></span>
            </div>
            <div className="nav-bar">
              <ul
                id="nav-mobile"
                className="right hide-on-med-and-down navigation-bar"
              >
                <li>
                  <Link to="/" onClick={() => setEditing(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/add" onClick={() => setEditing(false)}>
                    Add User
                  </Link>
                </li>
                <li>
                  <Link to="/addproject" onClick={() => setEditing(false)}>
                    Add Project
                  </Link>
                </li>
                <li>
                  <Link to="/userList" onClick={() => setEditing(false)}>
                    Users List
                  </Link>
                </li>
                <li>
                  <Link to="/projecttable">Projects</Link>
                </li>
                <li>
                  <Link to="/usertable" onClick={() => setEditing(false)}>
                    Users
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={() => exit()}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      ) : (
        <nav>
          <div className="nav-wrapper col s12 m4 l7">
            <span className="brand-logo"></span>
            <div>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <Link to="/" onClick={() => setEditing(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/registration" onClick={() => setEditing(false)}>
                    Registration
                  </Link>
                </li>
                <li>
                  <Link to="/login" onClick={() => setEditing(false)}>
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default withRouter(NavBar);
