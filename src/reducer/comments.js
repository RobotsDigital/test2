import { ADD_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'

const defaultComments = normalizedComments.reduce(
  (acc, comment) => ({
    ...acc,
    [comment.id]: comment
  }),
  {}
)

export default (state = defaultComments, action) => {
  const { type } = action
  switch (type) {
    case ADD_COMMENT:
      console.log('addComment', action)
      console.log('commentsList', state)
      const { payload } = action
      const newComment = {}
      newComment[payload.id] = {
        id: payload.id,
        text: payload.text,
        user: payload.user
      }
      return { ...state, ...newComment }

    default:
      return state
  }
}
