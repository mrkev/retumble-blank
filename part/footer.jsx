import React from "react";

/** Includes: theme attribution and search field */
export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <form action="/search" method="get" id="searchform">
          <input type="text" name="q" />
        </form>
      </footer>
    );
  }
}
