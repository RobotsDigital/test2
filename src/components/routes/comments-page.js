import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import CommentsRss from '../comments-rss'

class CommentsPage extends Component {
  render() {
    return (
      <Fragment>
        <Route path="/comments/:page" children={this.getComments} />
      </Fragment>
    )
  }

  getComments = ({ match }) => {
    const { page } = match.params

    return <CommentsRss page={page} key={page} />
  }
}
export default CommentsPage
