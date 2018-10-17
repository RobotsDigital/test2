import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from '../comment'
import CSSTransition from 'react-addons-css-transition-group'
import toggleOpen from '../../decorators/toggleOpen'
import './style.css'

export class Index extends Component {
  /*
  static defaultProps = {
    comments: []
  }
*/
  static propTypes = {
    comments: PropTypes.array,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  render() {
    const { isOpen, toggleOpen } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button onClick={toggleOpen} className="test--comments__btn">
          {text}
        </button>
        {this.getBody()}
      </div>
    )
  }

  getBody() {
    //    const { comments = [], isOpen } = this.props
    const { comments, isOpen } = this.props
    if (!isOpen) return null

    const body = comments.length ? (
      <CSSTransition
        transitionAppear
        transitionName="comment-list"
        transitionEnterTimeout={500}
        transitionAppearTimeout={1000}
        transitionLeaveTimeout={300}
      >
        <ul className="test--comments__list">
          {comments.map((comment) => (
            <li key={comment.id} className="test--comment-list__item">
              <Comment comment={comment} />
            </li>
          ))}
        </ul>
      </CSSTransition>
    ) : (
      <h3>No comments yet</h3>
    )

    return <div>{body}</div>
  }
}

export default toggleOpen(Index)
