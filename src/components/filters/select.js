import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import { changeSelect } from '../../ac'

class SelectFilter extends Component {
  handleChange = (selected) => {
    const { changeSelect } = this.props
    changeSelect(selected)
  }

  get options() {
    return this.props.articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }

  render() {
    const { selected } = this.props
    return (
      <Select
        options={this.options}
        value={selected}
        onChange={this.handleChange}
        isMulti
      />
    )
  }
}

export default connect(
  (state) => ({
    articles: state.articles,
    selected: state.filters.selected
  }),
  { changeSelect }
)(SelectFilter)
