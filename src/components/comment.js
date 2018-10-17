import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Comment extends PureComponent {
  static propTypes = {
    comment: PropTypes.shape({
      user: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  }

  render() {
    const { comment } = this.props
    return <div>{comment.text}</div>
  }
}

export default Comment
