import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateProject, getProjects } from "../../Redux/actions/actions";
import Autocomplete from "../Autocomplete";

const EditForm = ({ data, currentProject, setEditing }) => {
  const [project, setProject] = useState({ currentProject });
  useEffect(() => {
    setProject(currentProject);
  }, [currentProject]);

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    setEditing(false);
    dispatch(updateProject(project.id, project));
    dispatch(getProjects());
  };

  const handleProjectChange = e => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const autoComplete = val => {
    setProject({ ...project, developers: val.length && val.join(", ") });
  };

  const formList = [
    { name: "projectname" },
    { name: "rate" },
    { name: "hoursperweek" }
  ];

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="col s12">
        <div className="row">
          <h4>Project</h4>
          <div className="col s8">
            {formList.map(item => (
              <div className="input-field" key={item.name}>
                <input
                  onChange={handleProjectChange}
                  type="text"
                  name={item.name}
                  key={project.name}
                  value={project[item.name]}
                  required
                />
                <label className="active">{item.name}</label>
              </div>
            ))}
            <div className="input-field ">
              <textarea
                onChange={handleProjectChange}
                id="textarea1"
                name="projectinfo"
                className="materialize-textarea"
                value={project.projectinfo}
              ></textarea>
              <label className="active" htmlFor="textarea1">
                projectinfo
              </label>
            </div>

            <div className="input-field">
              <Autocomplete
                autoComplete={autoComplete}
                suggest={data}
                inputChange={handleProjectChange}
                project={project}
                setProject={setProject}
              />
            </div>
            <div className="cancel">
              <button
                onClick={() => setEditing(false)}
                className="cancel-button col s12 m12 l12 waves-effect waves-light red btn "
                type="submit"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
