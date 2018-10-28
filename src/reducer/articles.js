import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'

const defaultArticles = normalizedArticles.reduce(
  (acc, article) => ({
    ...acc,
    [article.id]: article
  }),
  {}
)

export default (articlesState = defaultArticles, action) => {
  const { type, payload } = action
  console.log('article', type)
  switch (type) {
    case ADD_COMMENT:
      return Object.keys(articlesState).reduce((acc, articleId) => {
        if (articleId === payload.articleId) {
          const comments = articlesState[articleId].comments || []
          acc[articleId] = {
            ...articlesState[articleId],
            comments: [...comments, payload.id]
          }
        } else {
          acc[articleId] = articlesState[articleId]
        }

        return acc
      }, {})

    case DELETE_ARTICLE:
      return Object.keys(articlesState).reduce((acc, articleId) => {
        if (articleId !== payload.id) {
          acc[articleId] = articlesState[articleId]
        }

        return acc
      }, {})

    default:
      return articlesState
  }
}
