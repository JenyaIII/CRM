import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../Redux/actions/actions";

const UserList = () => {
  const users = useSelector(state => state.postReducer.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="container section">
      <div className="row">
        {users.length
          ? users.map(item => (
            <div className="col s12 m4 l3  pull-l2" key={item.id}>
              <div className="card">
                <div className="card-image">
                  <img src={item.file || item.pic} alt={item.pic} />
                  <span className="card-title">{item.devname}</span>
                </div>
                <div className="card-content">
                  <p>
                    <strong className="card-text">Skype:</strong> {item.skype}
                    <br />
                    <strong className="card-text">Telephone:</strong>
                    {item.telephone}
                    <br />
                    <strong className="card-text">E-mail:</strong>{" "}
                    {item.email}
                    <br />
                    <strong className="card-text">Status:</strong>{" "}
                    {item.status}
                  </p>
                </div>
                <div className="card-action">
                  <Link to={`/about/${item.id}`}>About</Link>
                </div>
              </div>
            </div>
          ))
          : ""}
      </div>
    </div>
  );
};

export default UserList;
