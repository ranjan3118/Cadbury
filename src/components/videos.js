import React, { Component } from 'react'
import Video from './video'
import Fab from '@material-ui/core/Fab'

class Videos extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rVideos: [],
      remoteStreams: [],
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.remoteStreams !== nextProps.remoteStreams) {
      let _rVideos = nextProps.remoteStreams.map((rVideo, index) => {
        const _videoTrack = rVideo.stream
          .getTracks()
          .filter((track) => track.kind === 'video')

        let video = (_videoTrack && (
          <Video
            videoStream={rVideo.stream}
            frameStyle={{ width: 120, float: 'left', padding: '0 3px' }}
            videoStyles={{
              cursor: 'pointer',
              objectFit: 'cover',
              borderRadius: 3,
              width: '100%',
            }}
            autoplay
          />
        )) || <div></div>

        return (
          <div
            id={rVideo.name}
            onClick={() => this.props.switchVideo(rVideo)}
            style={{ display: 'inline-block' }}
            key={index}
          >
            {video}
          </div>
        )
      })

      this.setState({
        remoteStreams: nextProps.remoteStreams,
        rVideos: _rVideos,
      })
    }
  }

  render() {
    return (
      <div
        style={{
          zIndex: 3,
          position: 'fixed',
          padding: '6px 3px',
          backgroundColor: 'white',
          maxHeight: 120,
          top: 'auto',
          right: 0,
          left: 0,
          bottom: 0,
          overflowX: 'scroll',
          whiteSpace: 'nowrap',
          borderRadius : 10
        }}
      >
        {this.state.rVideos}
      </div>
    )
  }
}

export default Videos
