import React from "react";
import serialize from "form-serialize";
import { useNavigate } from "react-router-dom";

function AddMovie(props) {
  const navigate = useNavigate();

  function handleFormSubmit(e) {
    e.preventDefault();
    const newMovie = serialize(e.target, { hash: true });
    props.onAddMovie(newMovie);
    navigate("/");
  }

  return (
    <div className="container">
      <form className="mt-5" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="form-control"
          id="disabledInput"
          placeholder="Fill the form to add a movie..."
          disabled
        />
        <div className="form-row">
          <div className="formgroup col-md-12">
            <label required htmlFor="inputName">
              Title
            </label>
            <input type="text" className="form-control" name="title" />
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="inputRating">Rating</label>
            <input type="text" className="form-control" name="rating" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="inputImage">Image URL</label>
            <input type="text" className="form-control" name="imageURL" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="descriptionTextarea">Description</label>
            <textarea
              className="form-control"
              name="description"
              rows="5"
            ></textarea>
          </div>
        </div>
        <input
          type="submit"
          className="btn btn-success btn-block col-md-2"
          value="Add Movie"
          style={{ margin: "0.5rem 0rem", float: "right" }}
        />
        <input
          onClick={() => navigate("/")}
          type="button"
          className="btn btn-danger btn-block col-md-2"
          value="Cancel"
          style={{ margin: "0.5rem 1rem", float: "right" }}
        />
      </form>
    </div>
  );
}

export default AddMovie;
