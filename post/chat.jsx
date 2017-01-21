import { PostMeta, PostNotes, PrePost } from './_includes.jsx'
import React from 'react'


export default class ChatPost extends React.Component {
  render() { return (
    <div className="post">
      <div className="chat">

        {!!this.props.Title &&
          <b>{this.props.Title}</b>
        }

        <ul>
        {this.props.Lines.map((line, i) => (
            <li className="member{line.UserNumber}" key={i}>
              {!!line.Label && <span className="label">{line.Label}</span> }
              {line.Line}
            </li>)
        )}
        </ul>

        <PostMeta {... this.props}/>
      </div>

      <PostNotes PostNotes={this.props.PostNotes} />

    </div>
  )}
}
