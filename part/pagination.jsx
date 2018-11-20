import React from 'react';
import { Strings as S } from 'retumble';

/** Pagination shown on post-list pages (like the index page of the blog, for example) */
class Pagination extends React.Component {
  render() {
    return (
      <div id="navigation">
        {this.props.Next && (
          <a href={this.props.Next}>&larr; {S['Older'].toLowerCase()}</a>
        )}

        {this.props.CurrentPage && (
          <span className="page_number">
            &nbsp; {this.props.CurrentPage}/{this.props.TotalPages} &nbsp;
          </span>
        )}

        {this.props.Previous && (
          <a href={this.props.Previous}>
            {/* {S['Newer'].toLowerCase()} &rarr; */}
          </a>
        )}
      </div>
    );
  }
}

export default {
  Permalink: Pagination,
  Index: Pagination,
};
