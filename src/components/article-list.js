import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Article from './article'
import accordionDecorator from '../decorators/accordion'

export class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    fetchData: PropTypes.func,

    //from accordion decorator
    openItemId: PropTypes.string,
    toggleItem: PropTypes.func
  }

  render() {
    return <ul>{this.items}</ul>
  }

  get items() {
    const { articles, filters, openItemId, toggleOpenItem } = this.props
    // Стоит ли выносить в стору отфильтрованные значения
    const filtredArticles = articles.filter((article) => {
      const articleDate = new Date(article.date)
      const { from, to } = filters.dateRange

      if (from && articleDate <= from) return false
      if (to && articleDate >= to) return false
      if (filters.selected.length)
        return filters.selected.some((select) => select.value === article.id)

      return true
    })

    return filtredArticles.map((article) => (
      <li key={article.id} className="test--article-list__item">
        <Article
          article={article}
          isOpen={openItemId === article.id}
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

const ArticleListWithAccordion = accordionDecorator(ArticleList)

export default connect((state) => ({
  articles: state.articles,
  filters: state.filters
}))(ArticleListWithAccordion)
