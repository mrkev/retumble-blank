
import React from 'react';

export default class LinkPost extends React.Component {
  render() { return (
    <div className="link">

      <h2>
        <a href={this.props.URL}
          target={this.props.Target}>
          {this.props.Name}
        </a>
      </h2>

      { this.props.Description }
    </div>
  );}
}

