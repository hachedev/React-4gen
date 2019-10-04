import React, { Component } from 'react'

import Navbar from '../components/Navbar'
import PostCardList from '../components/PostCardList'

import api from '../lib/api'

class Index extends Component {
  constructor (props) {
    super(props)

      this.state = {
      posts: [],
      hasError: false,
      errorMessage: ''
    }
  }

  async componentDidMount () {
    try {
      const posts = await api.getPosts()

      this.setState({ posts})
    } catch (error) {
      this.setState({
        hasError: true,
        errorMessage: error.message
      })
    }
  }

  render () {
    return(
      <main>
        <Navbar />
        {
          !this.state.hasError ? (
            <PostCardList
              posts={ this.state.posts}
            />
          ) : (
            <h1 className="title is error">
              Ups el back hizo la automorición :(
            </h1>
          )
        }
      </main>
    )
  }
}

export default Index
