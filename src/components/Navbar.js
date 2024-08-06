import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <div>
      <ul className="nav justify-content-center text-bg-success">
        <li className="nav-item">
          <h1>
            <i className="fa-solid fa-burger"></i>
            {props.title}
          </h1>
          <div className="input-group input-group-default mb-3">
            <input
              type="text"
              onChange={props.handleChange}
              value={props.searchText}
              className="form-control"
              placeholder="Enter Recipe Name"
              aria-label="Enter Recipe Name"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-dark"
              onClick={props.searchRecipe}
              type="button"
              id="button-addon2"
            >
              Search Recipe
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
Navbar.propTypes = {
  searchText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  searchRecipe: PropTypes.func.isRequired,
};
