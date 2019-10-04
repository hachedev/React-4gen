import React, { Component } from 'react'
import FormCreateNewPost from '../components/FormCreateNewPost';

class NewPost extends Component {
  render() {
    return (
      <div className="new-post container">
        <h2 className="text-center">
          Este es un nuevo post
        </h2>
        <FormCreateNewPost />
      </div>
    )
  }
}

export default NewPost
