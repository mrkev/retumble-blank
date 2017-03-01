
import React from 'react'

export default class TextPost extends React.Component {
  render() { return (
    <div className="text">
      { !!this.props.Title && <h2>{this.props.Title}</h2> }
      { this.props.body() }
    </div>
  )}
}
