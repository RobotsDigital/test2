import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import Select from 'react-select'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import ArticleList from './article-list'
import ArticleChart from './articles-chart'
import UserForm from './user-form'
import articles from '../fixtures'

class App extends Component {
  state = {
    selected: null,
    selectedDay: null
  }
  render() {
    return (
      <div>
        <Select
          options={this.options}
          value={this.state.selected}
          onChange={this.handleSelectionChange}
          isMulti
        />
        <DayPicker
          selectedDays={this.state.selectedDay}
          onDayClick={this.handleDayClick}
        />
        <p>
          {this.state.selectedDay
            ? this.state.selectedDay.toLocaleDateString()
            : 'Please select a day 👻'}
        </p>
        <ArticleList articles={articles} ref={this.setArticleListRef} />
        <ArticleChart articles={articles} />
      </div>
    )
  }

  handleSelectionChange = (selected) => this.setState({ selected })

  handleDayClick = (day, { selected }) => {
    this.setState({
      selectedDay: selected ? undefined : day
    })
  }

  get options() {
    return articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }

  setArticleListRef = (ref) => {
    console.log('---', 'article list ref', ref, findDOMNode(ref))
  }
}

export default App
