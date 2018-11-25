import React from "react";
import Pagination from "./part/pagination.jsx";
import Header from "./part/header.jsx";
import Footer from "./part/footer.jsx";
import Post from "./post/post.jsx";
import InfiniteIndex from "./components/InfiniteIndex.jsx";

require("normalize.css");
require("./main.css");

/**
 * The Blog. This is the only class that gets "manually" appended to the HTML.
 * Recieves the JSON object from feather.html
 */
export default class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infinite_scroll: true,
    };
  }

  render() {
    const index = this.props.Content.Type === "index";
    const post = this.props.Content.Type === "post";
    const page = this.props.Content.Type === "page";

    const body = index ? (
      <InfiniteIndex
        postComponent={Post}
        index={this.props.Content}
        autoScroll={this.state.infinite_scroll}
      />
    ) : post || page ? (
      <Post {...this.props.Content.Post} />
    ) : null;

    const pagination =
      index && this.state.infinite_scroll ? null : index ? (
        <Pagination.Index {...this.props.Index.Pagination} />
      ) : post ? (
        <Pagination.Permalink {...this.props.Content.Pagination} />
      ) : page ? null : null;

    return (
      <div>
        <Header {...this.props} />
        {body}
        {pagination}
        <Footer />
      </div>
    );
  }
}
