import { createSelector } from 'reselect'

export const selectionSelector = (state) => state.filters.selected
export const dateRangeSelector = (state) => state.filters.dateRange
export const articleListSelector = (state) => state.articles
export const commentsSelector = (state) => state.comments
export const articlesSelector = (state) => state.articles
export const idSelector = (_, props) => props.id

export const filtratedArticlesSelector = createSelector(
  selectionSelector,
  dateRangeSelector,
  articleListSelector,
  (selected, dateRange, articles) => {
    console.log('---', 'article list selector')
    const { from, to } = dateRange

    return Object.keys(articles).filter((articleId) => {
      const published = Date.parse(articles[articleId].date)
      return (
        (!selected.length ||
          selected.find((selected) => selected.value === articleId)) &&
        (!from || !to || (published > from && published < to))
      )
    })
  }
)

export const createCommentSelector = () =>
  createSelector(commentsSelector, idSelector, (comments, id) => {
    return comments[id]
  })
