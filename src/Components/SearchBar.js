import React from "react";

const SearchBar = ({ setKeyWord, keyWord }) => {
  return (
    <div className="container search col s12">
      <nav>
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input
                onChange={e => setKeyWord(e.target.value)}
                name="search"
                type="search"
                value={keyWord}
              />
              <label className="label-icon">
                <i className="material-icons">search</i>
              </label>
              <i className="material-icons" onClick={() => setKeyWord("")}>
                close
              </i>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default SearchBar;
