import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const About = ({ match }) => {
  const users = useSelector(state => state.postReducer.users);
  const info = users.filter(item => item.id === +match.params.id);

  return (
    <div className="about">
      {info.length
        ? info.map(item => (
            <div className="row">
              <div className="container">
                <div className="about-avatar col s12 m6 l4">
                  <img
                    className="avatar-image"
                    src={item.file || item.pic}
                    alt={item.pic}
                  />
                </div>
                <div className="items col s12 m6 l6">
                  <ul className="collection z-depth-4">
                    <li className="collection-header center">
                      <h4>About</h4>
                    </li>
                    <li className="collection-item name">{item.devname}</li>
                    <li className="collection-item">
                      <strong>Telephone:</strong> {item.telephone}
                    </li>
                    <li className="collection-item">
                      <strong>E-mail:</strong> {item.email}
                    </li>
                    <li className="collection-item">
                      <strong>Skype:</strong> {item.skype}
                    </li>
                    <li className="collection-item ">
                      <textarea
                        className="textarea"
                        cols="30"
                        rows="10"
                        defaultValue={item.about}
                      />
                    </li>
                  </ul>
                  <Link to="/userlist">
                    <button className="col s12 waves-effect waves-light btn center backuserlist">
                      BACK
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        : " "}
    </div>
  );
};

export default About;
