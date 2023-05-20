import React from "react";
import notAvailImg from "../../../../images/img-not-avail.jpeg";
import "./Card.css";

export default function Card(props) {
  return (
    <div key={props.res._id} className="prop-showcase-card">
      <div className="prop-showcase-card-top-container">
        <img
          src={
            props.res.property_image
              ? props.res.property_image._url
              : notAvailImg
          }
          className="prop-showcase-card-img"
          alt="property"
        />
      </div>
      <div className="prop-showcase-card-mid-container">
        <p>$Price</p>
        <div className="prop-current-status">
          <p>{props.res.property_category.text}</p>
        </div>
      </div>
      <div className="prop-showcase-card-bottom-container">
        <p>{props.res.system_search_key}</p>
        <p>Beds and Baths</p>
      </div>
    </div>
  );
}
