import { CHANGE_DATE, CHANGE_SELECT } from '../constants'

export default (
  filtersState = {
    selected: [],
    dateRange: { from: null, to: null }
  },
  action
) => {
  const { type, payload } = action

  switch (type) {
    case CHANGE_DATE:
      filtersState = { ...filtersState, dateRange: payload.dateRange }
      return filtersState

    case CHANGE_SELECT:
      filtersState = { ...filtersState, selected: payload.selected }
      return filtersState

    default:
      return filtersState
  }
}
