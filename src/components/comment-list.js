import React, { Component } from 'react'
import Comment from './comment'
import toggleDecorator from '../decorators/toggle'

class commentsList extends Component {
  render() {
    return (
      <div>
        <h3>Comments</h3>
        {this.openBtn}
        <ul>{this.items}</ul>
        {this.emptyText}
      </div>
    )
  }
  state = {
    open: false
  }

  get isEmpty() {
    const { comments } = this.props
    return !comments
  }

  get openBtn() {
    if (this.isEmpty) return null
    return (
      <button onClick={this.onToggle}>
        {this.isOpen ? 'Hide comments' : 'Show comments'}
      </button>
    )
  }

  get emptyText() {
    return this.isEmpty && 'No comments yet...'
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
