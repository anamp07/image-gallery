import React from 'react'
import PropTypes from "prop-types";

const Card = ({ img, alt }) => {
  return (
    <div className="mb-4" 
    style={{
        width: "100%",
        height: "20rem",
    }}>
        <img src={img} class="rounded" alt={alt} style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
        }}/>
    </div>
  )
}

Card.propTypes = {
    img: PropTypes.string,
};

export default Card