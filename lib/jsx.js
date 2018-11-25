import React from "react";

/** JSX Utilities */

/**
 * (string, object) => React.Node
 * Takes a string containing HTML a props object and returns a div, with
 * contents set to the HTML in the string, and props set to the object.
 *
 * A lot of Tumblr text might include HTML. NOTE: as always when dynamically
 * loading something, use at your own risk!
 */
export function divWithHTML(html = "", props = {}) {
  return <div {...props} dangerouslySetInnerHTML={{ __html: html }} />;
}
