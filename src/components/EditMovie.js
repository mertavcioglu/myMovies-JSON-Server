import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function EditMovie(props) {
  const [input, setInput] = useState("asd");
  const navigate = useNavigate();

  function handleFormSubmit(e) {
    e.preventDefault();
    //
    props.onEditMovie(props.updatedMovie);
    navigate("/");
  }

  function onInputChange(e) {
    setInput({
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="container">
      <form className="mt-5" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="form-control"
          id="disabledInput"
          placeholder="Edit the form to update a movie..."
          disabled
        />
        <div className="form-row">
          <div className="formgroup col-md-12">
            <label required htmlFor="inputName">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder={props.movieTitle}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="inputRating">Rating</label>
            <input
              type="text"
              className="form-control"
              name="rating"
              placeholder={props.movieRating}
              onChange={onInputChange}
              onFocus={(e) => (e.target.placeholder = "")}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="inputImage">Image URL</label>
            <input
              type="text"
              className="form-control"
              name="imageURL"
              placeholder={props.movieImageURL}
              onChange={onInputChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="descriptionTextarea">Description</label>
            <textarea
              className="form-control"
              name="description"
              rows="5"
              placeholder={props.movieDescription}
              onChange={onInputChange}
            ></textarea>
          </div>
        </div>
        <input
          type="submit"
          className="btn btn-primary btn-block col-md-2"
          value="Edit Movie"
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

export default EditMovie;
