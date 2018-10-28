import React, { Component } from 'react'

class CommentForm extends Component {
  state = { text: '' }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea value={this.state.text} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default CommentForm
