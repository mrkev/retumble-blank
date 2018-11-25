// @flow
import React from "react";

import ProgressButton from "react-progress-button";
import Waypoint from "react-waypoint";
import { getPage } from "retumble";

require("./InfiniteIndex.css");

type Props = {
  index: Object,
  postComponent: Object,
  fetchOnScroll: boolean,
  showMoreButton: boolean,
};

type State = {
  query: QueryState,
  buttonText: string,
  posts: Array<Object>,
  pagination: {
    Next: string,
    Previous: string,
    Current: number,
    Total: number,
  },
};

type QueryState = "" | "loading" | "success" | "error" | "disabled";

export default class InfiniteIndex extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    if (props.content.Type !== "index") {
      throw new Error("InfiniteIndex was passed some non-index content!");
    }

    this.state = {};
    this.state.posts = props.content.Posts;
    this.state.pagination = props.content.Pagination;

    if (this.state.pagination.Current >= this.state.pagination.Total) {
      this.state.query = "disabled";
      this.state.buttonText = "that's it!";
      return;
    } else {
      this.state.query = "";
      this.state.buttonText = "more";
    }
  }

  queryNextPage() {
    // todo; what happens when the end is reached
    if (this.state.pagination.Current >= this.state.pagination.Total) {
      return;
    }

    this.setState({ query: "loading" });

    getPage(this.state.pagination.Next)
      .catch(e => {
        console.error("error fetchig next index");
        console.error(e);
        this.setState({ query: "error" });
      })
      .then(blog => {
        this.setState(prevState => ({
          posts: prevState.posts.concat(blog.Content.Posts),
          pagination: blog.Content.Pagination,
        }));
        this.setState({ query: "" });
      });
  }

  render() {
    const PostComponent = this.props.postComponent;

    const progressButton = () => (
      <ProgressButton
        onClick={this.queryNextPage.bind(this)}
        state={this.state.query}
      >
        {this.state.buttonText}
      </ProgressButton>
    );

    return (
      <div id="content">
        {this.state.posts.map((post, i) => (
          <PostComponent {...post} key={i} />
        ))}
        {this.props.fetchOnScroll && (
          <Waypoint
            scrollableAncestor={window}
            debug={false}
            onEnter={this.queryNextPage.bind(this)}
          />
        )}

        {this.props.showMoreButton ||
          (this.state.query === "loading" && progressButton())}
      </div>
    );
  }
}
