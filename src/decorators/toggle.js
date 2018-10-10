//HOC === Higher Order Component == Decorator
import React, { Component } from 'react'

const toggleDecorator = (OriginalComponent) =>
  class ToggleDecorator extends Component {
    state = {
      isOpen: false
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          toggleOpen={this.toggleOpen}
          isOpen={this.state.isOpen}
        />
      )
    }

    toggleOpen = () => {
      this.setState({ isOpen: !this.state.isOpen })
    }
  }

export default toggleDecorator
