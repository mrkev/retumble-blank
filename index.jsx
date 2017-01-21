import Blog from './blog.jsx'
import ReactDOM from 'react-dom'
import React from 'react'
import TumblrBlog from './TumblrBlog.jsx'

/** Loads the blog */
const place = _ => {
  const props = new TumblrBlog(window.props)
  window.a = props;
  console.dir(props)
  if (!window.props) window.props = {}
  if (urlParams['render'] !== 'raw') {
    console.log('rendering')
		ReactDOM.render(
      <Blog {... props} />,
      document.getElementById('blog')
    );
  } else {
    document.open();
    document.write(JSON.stringify(props));
    document.close();
  }
}

place();

if (module.hot) {
  // Whenever a new version of App.js is available
  module.hot.accept(['./blog.jsx', './TumblrBlog.jsx'], () => {
    // Require the new version and render it instead
    let TumblrBlog = require('./TumblrBlog.jsx')
    let Blog = require('./blog.jsx')
    place()
  })
}

