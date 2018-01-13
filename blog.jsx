import Pagination from './part/pagination.jsx'
import Header     from './part/header.jsx'
import Footer     from './part/footer.jsx'
import Post       from './post/post.jsx'
import React      from 'react'
import { InfiniteIndex } from 'retumble'

require('normalize.css');
require("./main.css");

/**
 * The Blog. This is the only class that gets "manually" appended to the HTML.
 * Recieves the JSON object from feather.html
 */
export default class Blog extends React.Component {

//  static options = {
//    code_posts : true,
//  }

  constructor (props) {
    super(props)
    this.state = {
      infinite_scroll : true,
    }
  }

  render() {
    const index = this.props.PageType === 'index'
    const post = this.props.PageType === 'post'
    const page = this.props.PageType === 'page'

    const body =
      (index) ? <InfiniteIndex
        PostComponent={Post}
        Index={this.props.Index}
        autoScroll={this.state.infinite_scroll} /> :
      (post || page) ? <Post {... this.props.Content.Post}/> : null;

    const pagination =
      (index && this.state.infinite_scroll) ? null :
      (index) ? <Pagination.Index {... this.props.Index.Pagination}/> :
      (post)  ? <Pagination.Permalink {... this.props.Content.Pagination}/> :
      (page)  ? null : null;

    return (
      <div>
        <Header {... this.props} />
        { body }
        { pagination }
        <Footer />
      </div>
    )
  }
}

