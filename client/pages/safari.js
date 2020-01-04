import React, { Component } from 'react'

class Link extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.safari.description} ({this.props.safari.title})
        </div>
      </div>
    )
  }
}

export default Link