import { PostMeta, PostNotes, PrePost } from './_includes.jsx'
import PhotoPost  from './photo.jsx'
import QuotePost  from './quote.jsx'
import VideoPost  from './video.jsx'
import LinkPost   from './link.jsx'
import ChatPost   from './chat.jsx'
import TextPost   from './text.jsx'
import AudioPost  from './audio.jsx'
import React from 'react'

export default class Post extends React.Component {

  render() { return (
    <div className="post">

      { (() => { switch (this.props.PostType) {
          /** Photosets have type photo, but get passed as video smh */
          case "photo": return <PhotoPost {... this.props}/>
          case "quote": return <QuotePost {... this.props}/>
          case "video": return <VideoPost {... this.props}/>
          case  "link": return <LinkPost  {... this.props}/>
          case  "chat": return <ChatPost  {... this.props}/>
          case  "text": return <TextPost  {... this.props}/>
          case "audio": return <AudioPost {... this.props}/>
          default: return null } })()
      }

      <PostMeta {... this.props}/>

			{/* this.props.likebutton() */ }
      {/* this.props.reblogbutton() */}
      {/* //{this.props.testlike */ }

      <PostNotes PostNotes={this.props.PostNotes} />
    </div>
  ) }
}
