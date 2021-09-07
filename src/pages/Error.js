import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="section error-page">
      <div className="error-container">
        <h1>Oops!</h1>
        <p>The page you are looking for ight have been removed, had it's name changed or is temporarily unavailable.</p>
        <Link to="/" className="btn btn-primary">GO TO HOMEPAGE</Link>
      </div>
    </section>
  )
}

export default Error
