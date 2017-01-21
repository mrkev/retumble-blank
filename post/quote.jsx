import { PostMeta, PostNotes, PrePost } from './_includes.jsx'
import React from 'react'

export default class QuotePost extends React.Component {
  render() { return (
    <div className="post quote">

      <h2>{this.props.Quote}</h2>

      {!!this.props.Source &&
        <p> -- {this.props.Source}</p>
      }

      <PostMeta {... this.props}/>

      <PostNotes PostNotes={this.props.PostNotes} />

    </div>
  )}
}
