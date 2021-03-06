import React from "react";

export default class ChatPost extends React.Component {
  render() {
    return (
      <div className="chat">
        {!!this.props.Title && <b>{this.props.Title}</b>}

        <ul>
          {this.props.Lines.map((line, i) => (
            <li className="member{line.UserNumber}" key={i}>
              {!!line.Label && <span className="label">{line.Label}</span>}
              {line.Line}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
