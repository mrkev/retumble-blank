
import React from 'react';

export default class VideoPost extends React.Component {
  render() { return (
    <div className="video">
      { this.props.player() }
      { this.props.Caption }
    </div>
  );}
}
