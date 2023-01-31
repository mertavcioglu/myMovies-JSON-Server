import React from "react";
import { Link } from "react-router-dom";

function MovieList(props) {
  return (
    <div className="row">
      {props.moviesProp.map((movie, index) => (
        <div className="col-lg-4" key={index}>
          <div className="card mb-4 shadow-sm">
            <img
              src={movie.imageURL}
              alt="Sample Movie Alt"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p
                className="card-text"
                style={{
                  marginTop: "1rem",
                  overflowY: "scroll",
                  height: "100px",
                  resize: "none",
                }}
              >
                {movie.description}
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <button
                  className="btn btn-md btn-outline-danger"
                  type="button"
                  onClick={(event) => props.deleteMovieProp(movie)}
                >
                  Delete
                </button>

                <Link
                  to={`edit/${movie.id}`}
                  type="button"
                  className="btn btn-md btn-outline-primary"
                  onClick={(event) => props.editMovieProp(movie.id)}
                >
                  Edit
                </Link>

                <h2>
                  <span className="badge bg-info">{movie.rating}</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
