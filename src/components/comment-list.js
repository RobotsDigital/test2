import React, { Component } from 'react'
import Comment from './comment'
import toggleDecorator from '../decorators/toggle'

class commentsList extends Component {
  render() {
    const buttonText = this.props.isOpen ? 'Close comments' : 'Open comments'
    return (
      <div>
        <h3>Comments</h3>
        <button onClick={this.onToggle}>{buttonText}</button>
        <ul>{this.items}</ul>
        {this.emptyText}
      </div>
    )
  }
  state = {
    open: false
  }

  get emptyText() {
    const { comments } = this.props
    return !comments && 'No comments yet...'
  }

  get items() {
    const { comments, isOpen } = this.props
    if (!comments || !isOpen) return null

    return comments.map((comment) => (
      <li key={comment.id}>
        <Comment comment={comment} />
      </li>
    ))
  }

  onToggle = () => this.props.toggleOpen()
}

export default toggleDecorator(commentsList)
