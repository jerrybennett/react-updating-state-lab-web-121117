// Code YouTubeDebugger Component Here
import React, {PropTypes} from 'react';

export default class YouTubeDebugger extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleBitRate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleVideo = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
        ...this.state.settings.video,
        resolution: '720p'
        }
      }
    })
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitRate}>Bitrate Change {this.state.settings.bitrate}</button>
        <button className="resolution" onClick={this.handleVideo}>Video Change {this.state.settings.video.resolution}</button>
      </div>
    );
  }
}
