//HOC === Higher Order Component == Decorator
import React, { Component } from 'react'

const accordionDecorator = (OriginalComponent) =>
  class AccordionDecorator extends Component {
    state = {
      openItemId: null
    }

    toggleOpenItem = (openItemId) => {
      const itemId = openItemId === this.state.openItemId ? null : openItemId

      return this.setState({ openItemId: itemId })
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          toggleOpenItem={this.toggleOpenItem}
          openItemId={this.state.openItemId}
        />
      )
    }
  }

export default accordionDecorator
