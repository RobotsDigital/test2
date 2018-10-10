import React, { PureComponent } from 'react'
import CommentList from './comment-list'

class Article extends PureComponent {
  render() {
    const { article, isOpen } = this.props
    const text = isOpen ? 'close' : 'open'
    return (
      <div>
        <h3 ref={this.setTitleRef}>{article.title}</h3>
        <button onClick={this.onButtonClick}>{text}</button>
        {this.body}
        <CommentList comments={article.comments} />
      </div>
    )
  }
  setTitleRef = (ref) => {
    console.log('---', 'article title', ref)
  }

  onButtonClick = () => this.props.toggleOpen(this.props.article.id)

  get body() {
    const { isOpen, article } = this.props
    if (!isOpen) return null
    return <section>{article.text}</section>
  }
}

export default Article
