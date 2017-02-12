import React from 'react'

/** Includes: Blog title, links to pages and description */
export default class Header extends React.Component {
  render() { return (
    <header>
      <h1><a href="/">{this.props.Title}</a></h1>

      {this.props.description()}

      <nav>

        {!!this.props.Pages &&
          this.props.Pages.map((page, i) =>
            <a href={page.URL} style={{marginRight:".5em"}} key={i}>{page.Label}</a>
        )}

      </nav>

    </header>
  )}
}

