import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

class Pagination extends Component {
  static propTypes = {
    count: PropTypes.number,
    perPage: PropTypes.string
  }

  render() {
    return (
      <ul>
        {this.pagesArray.map((val, idx) => (
          <li key={idx}>
            <NavLink to={`/comments/${val}`} activeStyle={{ color: 'red' }}>
              {val}
            </NavLink>
          </li>
        ))}
      </ul>
    )
  }

  get pagesArray() {
    const number = Math.ceil(this.props.count / this.props.perPage)
    let arr = []

    for (let i = 1; i <= number; i++) {
      arr.push(i)
    }

    return arr
  }
}

export default Pagination
