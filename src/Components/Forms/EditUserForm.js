import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../Redux/actions/actions";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const EditUser = ({ currentUser, setEditingUser }) => {
  const fileInput = useRef(null);
  const initialValue = {
    devname: "",
    telephone: "",
    skype: "",
    email: "",
    about: "",
    status: ""
  };

  const [userInfo, setUserInfo] = useState(initialValue);
  const dispatch = useDispatch();

  const initialAvatar = {
    file:
      "https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png"
  };
  const [avatar, setAvatar] = useState(initialAvatar);

  const fileSelectedHandler = event => {
    const imagePath = URL.createObjectURL(event.target.files[0]);
    setAvatar({ [event.target.name]: imagePath });
    setUserInfo({ ...userInfo, [event.target.name]: imagePath });
  };

  const [user, setUser] = useState({ currentUser });
  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  const handleChangeUser = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setEditingUser(false);
    dispatch(updateUser(user.id, user));
  };

  const formList = [
    { name: "devname" },
    { name: "telephone" },
    { name: "skype" },
    { name: "email" }
  ];
  const options = ["Select an developer status", "Junior", "Middle", "Senior"];
  const defaultOption = options[0];

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="col s12">
        <div className="row">
          <h4>New user</h4>
          <div className="col s8">
            {formList.map(item => (
              <div className="input-field" key={item.name}>
                <input
                  onChange={handleChangeUser}
                  type="text"
                  name={item.name}
                  value={user[item.name]}
                  required
                />
                <label className="active">{item.name}</label>
              </div>
            ))}
            <div className="input-field">
              <textarea
                onChange={handleChangeUser}
                id="textarea1"
                name="about"
                className="materialize-textarea"
                value={user.about}
              ></textarea>
              <label htmlFor="textarea1" className="active">
                about
              </label>
            </div>
            <div>
              <Dropdown options={options} value={defaultOption} />
            </div>
          </div>

          <div className="col s12 m8 l4">
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
                src={avatar.file}
                alt="kek"
              />
            </div>
          </div>
          <div>
            <button
              className="col s12 m8 l8 waves-effect waves-light btn save-changes"
              type="submit"
            >
              Save
            </button>
          </div>
          <div className="cancel">
            <button
              onClick={() => setEditingUser(false)}
              className="cancel-button col s12 m8 l8 waves-effect waves-light red btn "
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
