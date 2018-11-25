import React from "react";
import { divWithHTML } from "../lib/jsx";

export default class PhotoPost extends React.Component {
  render() {
    return (
      <div className="photo">
        {this.props.photos()}
        {divWithHTML(this.props.Caption)}
      </div>
    );
  }
}
