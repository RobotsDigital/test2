import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeDate } from '../../ac'
import DayPicker, { DateUtils } from 'react-day-picker'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
  handleDayClick = (day) => {
    const { changeDate, dateRange } = this.props
    changeDate(DateUtils.addDayToRange(day, dateRange))
  }

  render() {
    const { from, to } = this.props.dateRange
    const selectedRange =
      from && to && `${from.toDateString()} - ${to.toDateString()}`
    return (
      <div className="date-range">
        <DayPicker
          selectedDays={(day) => DateUtils.isDayInRange(day, { from, to })}
          onDayClick={this.handleDayClick}
        />
        {selectedRange}
      </div>
    )
  }
}

export default connect(
  (state) => ({
    dateRange: state.filters.dateRange
  }),
  { changeDate }
)(DateRange)
