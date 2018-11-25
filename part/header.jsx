import React from "react";

/** Includes: Blog title, links to pages and description */
export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>
          <a href="/">{this.props.Title}</a>
        </h1>

        {this.props.Description}

        <nav>
          {this.props.Pages.map((page, i) => (
            <a href={page.URL} key={i}>
              {page.Label}
            </a>
          ))}
        </nav>
      </header>
    );
  }
}
