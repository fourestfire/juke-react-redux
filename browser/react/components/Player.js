import React from 'react';
import AUDIO from '../audio';

export default class Player extends React.Component {
  componentDidMount() {
    AUDIO.addEventListener('ended', this.props.next);
    AUDIO.addEventListener('timeupdate', () => {
      this.props.dispatchSetProgress(AUDIO.currentTime, AUDIO.duration);
    });
  }
  render() {
    return (
      <footer>
        <div style={!this.props.currentSong.id ? { display: 'none' } : null}>
          <div className="pull-left">
            <button className="btn btn-default" onClick={this.props.prev}>
              <span className="glyphicon glyphicon-step-backward"></span>
            </button>
            <button className="btn btn-default" onClick={() => this.props.toggle(this.props.currentSong, this.props.currentSongList)}>
              <span className={this.props.isPlaying ? 'glyphicon glyphicon-pause' : 'glyphicon glyphicon-play'}></span>
            </button>
            <button className="btn btn-default" onClick={this.props.next}>
              <span className="glyphicon glyphicon-step-forward"></span>
            </button>
          </div>
          <div className="bar">
            <div className="progress">
              <div className="progress-bar" style={{ width: `${this.props.progress * 100}%` }}></div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
