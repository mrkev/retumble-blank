import { PostMeta, PostNotes, PrePost } from './_includes.jsx'
import React from 'react'

export default class PhotoPost extends React.Component {
  render() { return (
    <div className="post">
      <div className="photo">

        {this.props.photos()}
        {this.props.body()}

        <PostMeta {... this.props}/>
      </div>

      {!!this.props.PostNotes &&
        <PostNotes PostNotes={this.props.PostNotes} />
      }

    </div>
  )}
}
