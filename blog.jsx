import Pagination from './part/pagination.jsx'
import Header     from './part/header.jsx'
import Footer     from './part/footer.jsx'
import Post       from './post/post.jsx'
import React from 'react'

require('normalize.css');
require("./main.css");

const infinite_scroll = true;

/**
 * The Blog. This is the only class that gets "manually" appended to the HTML.
 * Recieves the JSON object from feather.html
 */
export default class Blog extends Spur.Blog {

  render() { console.log(this)

    const index = !!this.props.Index
    const perma = !!this.props.Content

    const body =
      (index &&  infinite_scroll) ? <Spur.InfiniteIndex PostComponent={Post} Index={this.props.Index} /> :
      (index && !infinite_scroll) ? "TODO" :
      (perma) ? <Post {... this.props.Content.Post} /> : null

    const pagination =
      (index && infinite_scroll) ? null :
      (index) ? <Pagination.Index {... this.props.Index.Pagination}/> :
      (perma) ? <Pagination.Permalink {... this.props.Content.Pagination}/> : null

    return (
    <div>
      <Header {... this.props} />
      { body }
      { pagination }
      <Footer />
    </div>
  )}
}

