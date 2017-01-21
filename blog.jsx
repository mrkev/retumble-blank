import PhotoPost from './post/photo.jsx'
import QuotePost from './post/quote.jsx'
import VideoPost from './post/video.jsx'
import LinkPost  from './post/link.jsx'
import ChatPost  from './post/chat.jsx'
import TextPost  from './post/text.jsx'
import AudioPost from './post/audio.jsx'

import React from 'react'

require('normalize.css');
require("./main.css");

/** Includes: Blog title, links to pages and description */
class Header extends React.Component {
  render() { return (
    <header>
      <h1><a href="/">{this.props.Title}</a></h1>

      {!!this.props.Description &&
          <span dangerouslySetInnerHTML={{__html: this.props.Description}}>
          </span>
        }

      <nav>

        {!!this.props.Pages &&
          this.props.Pages.map((page, i) =>
            <a href={page.URL} style={{marginRight:".5em"}} key={i}>{page.Label}</a>
        )}

        {!!this.props.AskEnabled &&
          <a href="/ask" style={{marginRight:".5em"}}>ask</a>
        }

        {!!this.props.SubmissionsEnabled &&
          <a href="/submit" style={{marginRight:".5em"}}>{this.props.SubmitLabel}</a>
        }

      </nav>

    </header>
  )}
}

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

/** Includes: theme attribution and search field */
class Footer extends React.Component {
  render() { return (
    <footer>
      <form action="/search" method="get" id="searchform">
        <input type="text" name="q"></input>
      </form>
    </footer>
  )}
}

/**
 * The Blog. This is the only class that gets "manually" appended to the HTML.
 * Recieves the JSON object from feather.html
 */
export default class Blog extends React.Component {
  render() { return !this.props.Posts ? <h1>RIP</h1> : (
    <div>
      <Header {... this.props} />
      <div id="content">
        {this.props.Posts.map(function (post, i) {

          switch (post.PostType) {

            /** Photosets have type photo, but get passed as video smh */
            case "photo": return <PhotoPost {... post} key={i}/>
            case "quote": return <QuotePost {... post} key={i}/>
            case "video": return <VideoPost {... post} key={i}/>
            case  "link": return <LinkPost  {... post} key={i}/>
            case  "chat": return <ChatPost  {... post} key={i}/>
            case  "text": return <TextPost  {... post} key={i}/>
            case "audio": return <AudioPost {... post} key={i}/>
          }
        })}

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

