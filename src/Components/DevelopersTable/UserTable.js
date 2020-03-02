import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, getUsers } from "../../Redux/actions/actions";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import UserStatus from "./UserStatus";

const UserTable = ({ editRoww }) => {
  const dispatch = useDispatch();

  const [keyWord, setKeyWord] = useState("");
  const [hasToken, setToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("Token");
    setToken(token);
    dispatch(getUsers());
  }, [dispatch]);

  const users = useSelector(state => state.postReducer.users);
  const isUserLoged = useSelector(state => state.postReducer.isUserLoged);

  const deleteDev = (id, obj) => {
    dispatch(deleteUser(id, obj));
  };

  const filteredProject = users.filter(item =>
    item.devname.toLowerCase().includes(keyWord.toLowerCase())
  );

  return (
    <>
      {isUserLoged || hasToken ? (
        <div className="container">
          <div className="row">
            <h5 className="center">USERS</h5>
            <SearchBar keyWord={keyWord} setKeyWord={setKeyWord} />
            <table className="highlight centered z-depth-5">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Skype</th>
                  <th>Telephone</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filteredProject.length
                  ? filteredProject.map(item => (
                      <tr key={item.id}>
                        <td>
                          <Link to={`/about/${item.id}`}>{item.devname}</Link>
                        </td>
                        <td>{item.email}</td>
                        <td>{item.skype}</td>
                        <td>{item.telephone}</td>
                        <td>
                          <UserStatus item={item.status} />
                        </td>
                        <td>
                          <button
                            onClick={() => editRoww(item)}
                            className="btn-floating btn-small waves-effect waves-light
                    red"
                          >
                            <i className="large material-icons">create</i>
                          </button>
                          <span> </span>
                          <button
                            onClick={() => deleteDev(item.id, item)}
                            className="btn-floating btn-small waves-effect waves-light red"
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="container invalid-login">
          <h4 className="center">E-mail or password invalid</h4>
        </div>
      )}
    </>
  );
};

export default UserTable;
