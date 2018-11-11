
import React from 'react';
import { Strings as S } from 'retumble';

export default class AudioPost extends React.Component {
  render() { return (
    <div className="audio">
      { this.props.audioPlayer(120, 40) }

      <ul>
        { this.props.Artist && <li>{this.props.Artist}</li> }
        { this.props.TrackName && <li>{this.props.TrackName}</li> }
        <li>{this.props.PlayCountWithLabel}</li>
      </ul>

      { this.props.Caption }

      { this.props.ExternalAudio &&
        <p><a href="{this.props.ExternalAudioURL}">{S['Download']}</a></p>
      }

    </div>
  );}
}
