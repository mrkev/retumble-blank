import { PostMeta, PostNotes, PrePost } from './_includes.jsx'
import React from 'react'

export default class VideoPost extends React.Component {
  render() { return (
      <div className="video">

        { this.props.player() }
        { this.props.body() }

    </div>
  )}
}
