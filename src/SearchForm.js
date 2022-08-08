import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <form className="form container">
      <div className="row location">
        <div className="col-sm-4 location-element search">
          <input
            className="search-input form-control"
            type="text"
            aria-describedby="Enter Location"
            placeholder="Enter a location"
            autoFocus="on"
          />
        </div>
        <div className="col-sm-2 location-element">
          <input
            type="submit"
            className="btn btn-success shadow-sm search-btn"
            value="🔍 Search"
          />
        </div>
        <div className="col-sm-6 location-element">
          <button
            className="btn btn-primary shadow-sm use-location"
            type="submit"
          >
            📍 Use My Location
          </button>
        </div>
      </div>
    </form>
  );
}
