import React, { Component } from 'react'
import FormCreateNewRepo from '../components/FormCreateNewRepo';

class NewPost extends Component {
  render() {
    return (
      <div className="new-repo container">
        <FormCreateNewRepo />
      </div>
    )
  }
}

export default NewPost
