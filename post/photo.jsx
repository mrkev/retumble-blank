
import React from 'react'

export default class PhotoPost extends React.Component {
  render() { return (
    <div className="photo">
      {this.props.photos()}
      {this.props.body()}
    </div>
  )}
}
