import React from 'react'

function CardGit (props) {
  const {id, node_id, name,} = props
  return(
    <div
      className="card">
      <div
        className="card-body">
        <h5
          className="card-title">
            { name }
        </h5>
        <h6
          className="card-subtitle mb-2 text-muted">
            { id }
        </h6>
        <p
          className="card-text">
          { node_id }
        </p>
      </div>
    </div>
  )
}

export default CardGit
