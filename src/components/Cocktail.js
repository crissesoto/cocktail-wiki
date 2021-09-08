import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({id, name, image, info, glass,instructions, number}) => {
  return (
    <div className="card-container">
      <div className="card u-clearfix">
      <img src={image} alt="" className="card-media" />
        <div className="card-body">
          <span className="card-number card-circle subtle">{number + 1}</span>
          <span className="card-author subtle">{info}</span>
          <h2 className="card-title">{name}</h2>
          <div className="card-description subtle">{glass}</div>
          <Link to={`/cocktail/${id}`} className="card-more">details</Link>
        </div>
      </div>
      <div className="card-shadow"></div>
    </div>
  )
}

export default Cocktail
