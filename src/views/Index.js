import React, { Component } from 'react'

import Navbar from '../components/Navbar'
import PostCardList from '../components/RepoCardList'

import api from '../lib/api'

class Index extends Component {
  constructor (props) {
    super(props)

      this.state = {
      repos: [],
      hasError: false,
      errorMessage: ''
    }
  }

  async componentDidMount () {
    try {
      const repos = await api.getRepos()

      this.setState({ repos })
    } catch (error) {
      this.setState({
        hasError: true,
        errorMessage: error.message
      })
      console.error(error)
    }
  }

  render () {
    return(
      <main>
        <Navbar />
        {
          !this.state.hasError ? (
            <PostCardList
              repos={ this.state.repos}
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
