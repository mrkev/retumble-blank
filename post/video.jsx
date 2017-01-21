import { PostMeta, PostNotes, PrePost } from './_includes.jsx'
import React from 'react'

export default class VideoPost extends React.Component {
  render() { return (
    <div className="post">
      <div className="video">

        { this.props.player() }
        { this.props.body() }

        <PostMeta {... this.props}/>
      </div>

      {!!this.props.PostNotes &&
        <PostNotes PostNotes={this.props.PostNotes} />
      }

    </div>
  )}
}
