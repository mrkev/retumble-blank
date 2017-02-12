import PhotoPost from './post/photo.jsx'
import QuotePost from './post/quote.jsx'
import VideoPost from './post/video.jsx'
import LinkPost  from './post/link.jsx'
import ChatPost  from './post/chat.jsx'
import TextPost  from './post/text.jsx'
import AudioPost from './post/audio.jsx'

import Header    from './part/header.jsx'
import Footer    from './part/footer.jsx'

import React from 'react'


require('normalize.css');
require("./main.css");

/** Pagination shown on post-list pages (like the index page of the blog, for example) */
class Pagination extends React.Component {
  render() { return (
    <div id="navigation">

      {!!this.props.NextPage &&
        <a href={this.props.NextPage} id="nav-next" style={{textTransform:"lowercase"}}>&larr; {this.props["lang:Older"]}</a>
      }

      <span className="page_number"> &nbsp; {this.props.CurrentPage}/{this.props.TotalPages} &nbsp;</span>

      {!!this.props.PreviousPage &&
        <a href={this.props.PreviousPage} id="nav-prev" style={{textTransform:"lowercase"}}>{this.props["lang:Newer"]} &rarr;</a>
      }

    </div>
  )}
}

/** Pagination shown on permalink pages */
class PermalinkPagination extends React.Component {
  render() { return (
    <nav>

      {!!this.props.PreviousPost &&
        <a href={this.props.PreviousPost} id="nav-next" style={{textTransform:"lowercase"}}>&larr; {this.props["lang:Older"]}</a>
      }

      <span className="page_number"> &nbsp; {this.props.CurrentPage}/{this.props.TotalPages} &nbsp;</span>

      {!!this.props.NextPost &&
        <a href={this.props.NextPost} id="nav-prev" style={{textTransform:"lowercase"}}>{this.props["lang:Newer"]} &rarr;</a>
      }

    </nav>
  )}
}

/**
 * The Blog. This is the only class that gets "manually" appended to the HTML.
 * Recieves the JSON object from feather.html
 */
export default class Blog extends React.Component {

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


  render() { return (
    <div>

      <Header {... this.props} />

      <div id="content">

        {this.postElement(this.props.Post) ||
         this.props.Posts.map((post, i) =>
          <div key={i}>{this.postElement(post)}</div>
        )}

        {!!this.props.Pagination &&
          <Pagination {... this.props.Pagination}/>
        }

        {!!this.props.PermalinkPagination &&
          <PermalinkPagination {... this.props.PermalinkPagination}/>
        }

      </div>

      <Footer />

    </div>
  )}
}

