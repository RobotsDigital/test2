import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CommentWithToggle from '../comment-list'
import articles from '../../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList', () => {
  it('should open comments on click', () => {
    const comments = articles[0].comments
    const container = mount(<CommentWithToggle comments={comments} />)

    expect(container.find('.test--comments__list').length).toEqual(0)

    container
      .find('.test--comments__btn')
      .at(0)
      .simulate('click')

    expect(container.find('.test--comment-list__item').length).toEqual(
      comments.length
    )
  })
})
