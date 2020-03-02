import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../Redux/actions/actions";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const AddUser = () => {
  const initialValue = {
    id: null,
    devname: "",
    telephone: "",
    skype: "",
    email: "",
    about: "",
    status: ""
  };
  const dispatch = useDispatch();

  const fileInput = useRef(null);

  const [userInfo, setUserInfo] = useState(initialValue);

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

  const handleChangeInput = event => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    userInfo.id = Date.now();
    userInfo.pic =
      "https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png";
    dispatch(addUser(userInfo));
    setUserInfo(initialValue);
  };

  const handleStatusChange = e => {
    setUserInfo({ ...userInfo, status: e.value });
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
                  onChange={handleChangeInput}
                  type="text"
                  name={item.name}
                  value={userInfo[item.name]}
                  required
                />
                <label>{item.name}</label>
              </div>
            ))}
            <div className="input-field">
              <textarea
                onChange={handleChangeInput}
                id="textarea1"
                name="about"
                className="materialize-textarea"
                value={userInfo.about}
              ></textarea>
              <label htmlFor="textarea1">about</label>
            </div>
            <div>
              <Dropdown
                onChange={handleStatusChange}
                options={options}
                value={defaultOption}
              />
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
          <button
            className="col s12 m8 l8 waves-effect waves-light btn backuserlist"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
