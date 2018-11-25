import React from "react";
import { Strings as S } from "retumble";

/** Pagination shown on post-list pages (like the index page of the blog, for example) */
export default function Pagination(props) {
  const nextText = props.type === "index" ? S["Newer"].toLowerCase() : "next";
  const previousText =
    props.type === "index" ? S["Older"].toLowerCase() : "previous";

  return (
    <div id="navigation">
      {props.Next && <a href={props.Next}>&larr; {previousText}</a>}

      {props.type === "index" && (
        <span className="page_number">
          &nbsp; {props.Current}/{props.Total} &nbsp;
        </span>
      )}

      {props.Previous && <a href={props.Previous}>{nextText} &rarr;</a>}
    </div>
  );
}
