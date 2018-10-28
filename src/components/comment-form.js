import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommentForm extends Component {
  static propTypes = {
    addComment: PropTypes.func
  }

  state = { text: '', user: 'Jane Dow' }

  handleSubmit = (e) => {
    e.preventDefault()
    const { addComment } = this.props
    addComment({ text: this.state.text, user: this.state.user })
  }

  handleTextChange = (e) => {
    this.setState({ text: e.target.value })
  }

  handleUserChange = (e) => {
    this.setState({ user: e.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.user}
          onChange={this.handleUserChange}
        />
        <textarea value={this.state.text} onChange={this.handleTextChange} />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default CommentForm
