import { PostMeta, PostNotes, PrePost } from './_includes.jsx'
import React from 'react'

export default class Post extends React.Component {
  render() { return (
    <div className="post">

      {this.props.children}

      <PostMeta {... this.props}/>

			{this.props.likebutton()}
      {this.props.reblogbutton()}

      <PostNotes PostNotes={this.props.PostNotes} />
    </div>
  ) }
}
