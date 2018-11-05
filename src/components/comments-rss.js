import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { loadCommentsByPage } from './../ac'
import Comment from './comment'
import Loader from './common/loader'
import { pageStateSelector } from '../selectors'
import Pagination from './pagination'

class Article extends PureComponent {
  state = {
    error: null
  }

  componentDidCatch(error) {
    this.setState({ error })
  }

  componentDidMount() {
    const { page } = this.props
    const { loadCommentsByPage, pageState } = this.props
    if (!pageState) loadCommentsByPage(page)
  }

  render() {
    const { pageState } = this.props
    if (!pageState || pageState.loading) return <Loader />

    return (
      <div>
        <ul>
          {pageState.commentIds.map((id) => (
            <li key={id}>
              <Comment id={id} />
            </li>
          ))}
        </ul>

        <Pagination count={pageState.total} perPage="5" />
      </div>
    )
  }
}

export default connect(
  (state, props) => {
    return {
      pageState: pageStateSelector(state, props.page)
    }
  },
  { loadCommentsByPage }
)(Article)
