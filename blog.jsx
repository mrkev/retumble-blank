import PhotoPost  from './post/photo.jsx'
import QuotePost  from './post/quote.jsx'
import VideoPost  from './post/video.jsx'
import LinkPost   from './post/link.jsx'
import ChatPost   from './post/chat.jsx'
import TextPost   from './post/text.jsx'
import AudioPost  from './post/audio.jsx'
import Header     from './part/header.jsx'
import Footer     from './part/footer.jsx'
import Post       from './post/post.jsx'
import Pagination from './part/pagination.jsx'
import React from 'react'

require('normalize.css');
require("./main.css");

/**
 * The Blog. This is the only class that gets "manually" appended to the HTML.
 * Recieves the JSON object from feather.html
 */
export default class Blog extends Spur.Blog {

  postElement(post) {
    if (!post) return null;

    switch (post.PostType) {

      /** Photosets have type photo, but get passed as video smh */
      case "photo": return <PhotoPost {... post}/>
      case "quote": return <QuotePost {... post}/>
      case "video": return <VideoPost {... post}/>
      case  "link": return <LinkPost  {... post}/>
      case  "chat": return <ChatPost  {... post}/>
      case  "text": return <TextPost  {... post}/>
      case "audio": return <AudioPost {... post}/>
      default: return null;
    }
  }

  render() { console.log(this); return (
    <div>

      <Header {... this.props} />

      <div id="content">

        {this.postElement(this.props.Post) ||
         this.state.Posts.map((post, i) =>
          <Post {...post} key={i}>
            {this.postElement(post)}
          </Post>
        )}

        {!!this.props.Pagination && <Pagination.Index {... this.props.Pagination}/> }
        {!!this.props.PermalinkPagination && <Pagination.Permalink {... this.props.PermalinkPagination}/> }

      </div>

      <Footer />

    </div>
  )}
}

