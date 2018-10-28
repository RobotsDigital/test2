import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Article from './article'
import accordionDecorator from '../decorators/accordion'
import { filtratedArticlesSelector } from '../selectors'

export class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    fetchData: PropTypes.func,

    //from accordion decorator
    openItemId: PropTypes.string,
    toggleItem: PropTypes.func
  }

  render() {
    console.log('---', 'rendering article list')
    return <ul>{this.items}</ul>
  }

  get items() {
    const { articles, openItemId, toggleOpenItem } = this.props
    console.log(Object.keys(articles))
    return articles.map((articleId) => (
      <li key={articleId} className="test--article-list__item">
        <Article
          id={articleId}
          isOpen={openItemId === articleId}
          toggleOpen={toggleOpenItem}
        />
      </li>
    ))
  }

  componentDidMount() {
    const { fetchData } = this.props
    fetchData && fetchData()
  }
}

export default connect((state) => {
  console.log('---', 'article list connect')
  return {
    articles: filtratedArticlesSelector(state)
  }
})(accordionDecorator(ArticleList))
