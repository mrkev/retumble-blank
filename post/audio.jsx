import { PostMeta, PostNotes, PrePost } from './_includes.jsx'
import React from 'react'

export default class AudioPost extends React.Component {
  render() { return (
    <div className="post">
      <div className="audio">

        { this.props.audioPlayer(120, 40) }

        <ul className="audio_details">
          {!!this.props.Artist &&
            <li>{this.props.Artist}</li>
          }
          {!!this.props.TrackName &&
            <li>{this.props.TrackName}</li>
          }
          <li>{this.props.PlayCountWithLabel}</li>
        </ul>

        { this.props.body() }

        {!!this.props.ExternalAudio &&
          <p><a href="{this.props.ExternalAudioURL}">{this.props["lang:Download"]}</a></p>
        }

        <PostMeta {... this.props}/>
      </div>

      <PostNotes PostNotes={this.props.PostNotes} />

    </div>
  )}
}
