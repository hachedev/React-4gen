import React from 'react'
import CardGit from './CardGit';

function RepotCardList (props) {
  const { repos } = props

  return (
    <section>
      <div className="container">
        <div className="row">

      {
        repos.map(repo => {
          return(
            <div className="col-3 p-1">
              <CardGit
                id={repo.id}
                node_id={repo.node_id}
                name={repo.name}
                key={repo.id}
                />
              </div>
          )
        })
      }
      </div>
    </div>
    </section>
  )
}

export default RepotCardList
