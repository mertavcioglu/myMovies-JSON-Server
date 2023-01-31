import React from "react";
import { Link } from "react-router-dom";

function SearchBar(props) {
  return (
    <div className="form-outline">
      <div className="col-12" style={{ margin: "0.5rem 0rem" }}>
        <input
          onChange={props.SearchMovieProp}
          type="search"
          id="form1"
          className="form-control"
          placeholder="Search a movie..."
          aria-label="Search"
        />
      </div>
      <div>
        <Link
          to="/add"
          className="btn btn-md btn-danger"
          style={{ margin: "0rem 0rem 0.5rem 0rem" }}
        >
          Add a New Movie
        </Link>
      </div>
    </div>
  );
}

export default SearchBar;
