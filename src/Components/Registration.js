import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../Redux/actions/actions";

const Registration = () => {
  const initialValue = {
    devname: "",
    password: "",
    email: ""
  };
  const fileInput = useRef(null);
  const [newUser, setNewUser] = useState(initialValue);

  const [userImage, setUserImage] = useState({
    file:
      "https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png"
  });
  const dispatch = useDispatch();

  const fileSelectedHandler = event => {
    const imagePath = URL.createObjectURL(event.target.files[0]);
    setUserImage({ [event.target.name]: imagePath });
    setNewUser({ ...newUser, [event.target.name]: imagePath });
  };

  const handleChangeRegistration = e => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const handleSubmitRegistration = e => {
    e.preventDefault();
    newUser.pic =
      "https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png";
    dispatch(registerUser(newUser));
    setNewUser(initialValue);
  };

  const registrationList = [
    { name: "devname", type: "text" },
    { name: "password", type: "password" },
    { name: "email", type: "email" }
  ];

  return (
    <div className="container">
      <form
        className="col s12 m6 l10 z-depth-3"
        onSubmit={handleSubmitRegistration}
      >
        <div className="row regist">
          <div className="registration-form col s12 m8 l6">
            <h4>Registration</h4>
            {registrationList.map(item => (
              <div className="registration">
                <div className="input-field" key={item.name}>
                  <input
                    type={item.type}
                    name={item.name}
                    required
                    onChange={handleChangeRegistration}
                  />
                  <label>{item.name}</label>
                </div>
              </div>
            ))}
          </div>
          <div className="register-avatar col s12 m8 l6 push-l1">
            <input
              className="file-input"
              style={{ display: "none" }}
              type="file"
              name="file"
              onChange={event => fileSelectedHandler(event)}
              ref={fileInput}
            />
            <div className="user-avatar">
              <img
                className="avatar-image"
                onClick={() => fileInput.current.click()}
                src={userImage.file}
                alt="kek"
              />
            </div>
          </div>
          <div className="center">
            <button
              type="submit"
              className="reg waves-effect waves-light btn-large"
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registration;
