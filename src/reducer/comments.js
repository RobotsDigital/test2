import {
  ADD_COMMENT,
  LOAD_COMMENTS,
  LOAD_ARTICLE_COMMENTS,
  SUCCESS,
  START
} from '../constants'
import { Record, OrderedMap } from 'immutable'
import { arrToMap } from './utils'

const CommentRecord = Record({
  id: null,
  text: null,
  user: null
})

const PageRecord = Record({
  commentIds: new OrderedMap({}),
  loading: false,
  loaded: false,
  total: 0
})

const ReducerRecord = Record({
  entities: new OrderedMap({}),
  byPageEntities: arrToMap([], PageRecord)
})

export default (state = new ReducerRecord(), action) => {
  const { type, payload, randomId, response } = action

  switch (type) {
    case ADD_COMMENT:
      return state.setIn(
        ['entities', randomId],
        new CommentRecord({
          ...payload.comment,
          id: randomId
        })
      )

    case LOAD_ARTICLE_COMMENTS + SUCCESS:
      console.log(response)
      return state.mergeIn(['entities'], arrToMap(response, CommentRecord))

    case LOAD_COMMENTS + START:
      return state
        .setIn(['byPageEntities', payload.page], new PageRecord())
        .setIn(['byPageEntities', payload.page, 'loading'], true)

    case LOAD_COMMENTS + SUCCESS:
      return state
        .mergeIn(['entities'], arrToMap(response.records, CommentRecord))
        .setIn(['byPageEntities', payload.page, 'loading'], false)
        .setIn(['byPageEntities', payload.page, 'loaded'], true)
        .setIn(['byPageEntities', payload.page, 'total'], response.total)
        .setIn(
          ['byPageEntities', payload.page, 'commentIds'],
          response.records.map((comment) => comment.id)
        )

    default:
      return state
  }
}
