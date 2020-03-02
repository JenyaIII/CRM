import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Redux/actions/actions";

const Login = props => {
  const initialValue = {
    email: "",
    password: ""
  };

  const dispatch = useDispatch();

  const [login, setLogin] = useState(initialValue);

  const isUserLoged = useSelector(state => state.postReducer.isUserLoged);

  if (isUserLoged) {
    props.history.push("/usertable");
  }

  const handleChange = e => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser(login));
    setLogin(initialValue);
  };

  return (
    <div className="container login-container">
      <div className="row">
        <form className="login-form col s12 z-depth-3" onSubmit={handleSubmit}>
          <div className="row login-row">
            <div className="center">
              <h5>Sign in</h5>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">account_circle</i>
              <input
                id="icon_prefix"
                type="email"
                className="validate"
                name="email"
                onChange={handleChange}
              />
              <label htmlFor="icon_prefix">E-mail</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">vpn_key</i>
              <input
                id="icon_telephone"
                type="password"
                className="validate"
                name="password"
                onChange={handleChange}
              />
              <label htmlFor="icon_telephone">Password</label>
            </div>
            <div className="center">
              <button className="waves-effect waves-light btn-large">
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
