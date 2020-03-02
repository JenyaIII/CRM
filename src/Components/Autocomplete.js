import React, { useState, Fragment } from "react";
import Dropdown from "react-dropdown";
import { useSelector } from "react-redux";
import "react-dropdown/style.css";

const Autocomplete = ({ autoComplete, project, setProject }) => {
  const initialValue = {
    activeSuggestion: 0,
    filteredSuggestions: [],
    showSuggestions: false,
    userInput: ""
  };
  const [suggestion, setSuggestion] = useState(initialValue);
  const suggest = useSelector(state => state.postReducer.users);

  const [userTags, setUserTag] = useState("");

  const handleChange = e => {
    const filteredSuggestions = suggest.filter(
      item =>
        item.devname.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
    );

    setSuggestion({
      ...suggestion,
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.target.value
    });
  };

  const handleClick = e => {
    setSuggestion({
      ...suggestion,
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: ""
    });
    setUserTag([...userTags, { tags: e.target.innerText }]);
  };
  const submitClick = () => {
    const developers = userTags.length && userTags.map(item => item.tags);
    autoComplete(developers);
  };
  const handleStatusChange = e => {
    setProject({ ...project, status: e.value });
  };
  const options = [
    "Select an project status",
    "In discussion",
    "In work",
    "Completed",
    "Draft"
  ];
  const defaultOption = options[0];

  const renderComponent = () => {
    if (suggestion.showSuggestions && suggestion.userInput) {
      if (suggestion.filteredSuggestions.length) {
        return (
          <ul className="suggestions">
            {suggestion.filteredSuggestions.map((suggestion, index) => {
              let className;
              if (index === suggestion.activeSuggestion) {
                className = "suggestion-active";
              }

              return (
                <li
                  className={className}
                  key={suggestion.id}
                  onClick={handleClick}
                >
                  {suggestion.devname}
                </li>
              );
            })}
          </ul>
        );
      } else
        return (
          <div className="no-suggestions">
            <em>No suggestions, you're on your own!</em>
          </div>
        );
    }
  };

  return (
    <Fragment>
      <div className="username-list">
        {userTags.length &&
          userTags.map(item => (
            <div className="row" key={item.tags}>
              <h6>{item.tags}</h6>
            </div>
          ))}
      </div>
      <label>developers</label>
      <input
        value={suggestion.userInput}
        type="text"
        onChange={handleChange}
        name="developers"
      />
      {renderComponent()}
      <div>
        <Dropdown
          onChange={handleStatusChange}
          options={options}
          value={defaultOption}
        />
      </div>
      <button
        className="col s12 m12 l12 waves-effect waves-light btn backuserlist"
        type="submit"
        onClick={submitClick}
      >
        Save
      </button>
    </Fragment>
  );
};

export default Autocomplete;
