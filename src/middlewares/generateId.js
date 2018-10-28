import { ADD_COMMENT } from '../constants'

export default (store) => (next) => (action) => {
  if (action.type === ADD_COMMENT) action.payload.id = '' + randomizer(1, 10000)
  console.log('---', 'addRandomId: ', action)
  next(action)
}

function randomizer(min, max) {
  let rand = min + Math.random() * (max + 1 - min)
  return Math.floor(rand)
}
