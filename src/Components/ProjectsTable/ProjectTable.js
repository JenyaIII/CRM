import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProject } from "../../Redux/actions/actions";
import ReactModal from "../ReactModal/ReactModal";
import SearchBar from "../SearchBar";
import ProjectStatus from "./ProjectStatus";

const Table = ({ editRow }) => {
  const [selectItem, setSelectItem] = useState({});
  const [modal, setModal] = useState(false);

  const [keyWord, setKeyWord] = useState("");

  const projects = useSelector(state => state.postReducer.projects);
  const dispatch = useDispatch();

  const handleOpenModal = item => {
    setSelectItem(item);
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
    setSelectItem({});
  };

  const deleted = (id, obj) => {
    dispatch(deleteProject(id, obj));
  };

  const filteredProjects = projects.filter(item =>
    item.projectname.toLowerCase().includes(keyWord.toLowerCase())
  );

  return (
    <div className="container">
      <div className="row">
        <h5 className="center">PROJECTS</h5>
        <SearchBar keyWord={keyWord} setKeyWord={setKeyWord} />
        <table className="highlight centered z-depth-5">
          <thead>
            <tr>
              <th>Current project</th>
              <th>Developers</th>
              <th>Hours per week</th>
              <th>Rate</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.length
              ? filteredProjects.map(item => (
                  <tr key={item.projectname}>
                    <td
                      className="modal-button"
                      onClick={() => handleOpenModal(item)}
                    >
                      {item.projectname}
                    </td>
                    <td>
                      <span>{item.developers}</span>
                    </td>
                    <td>{item.hoursperweek}</td>
                    <td>{item.rate}</td>
                    <td>
                      <ProjectStatus item={item.status} />
                    </td>
                    <td>
                      <button
                        onClick={() => editRow(item)}
                        className="btn-floating btn-small waves-effect waves-light
                      red"
                      >
                        <i className="large material-icons">create</i>
                      </button>
                      <span> </span>
                      <button
                        onClick={() => deleted(item.id, item)}
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
        <ReactModal
          item={selectItem}
          modal={modal}
          handleCloseModal={handleCloseModal}
        />
      </div>
    </div>
  );
};

export default Table;
