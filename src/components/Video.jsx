import { useState } from 'react';
import './Video.css';

function Video({ isExpanded }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const videos = [
    {
      id: 1,
      title: 'Spring 2026 Collection Film',
      thumbnail: 'video1'
    },
    {
      id: 2,
      title: 'Behind the Scenes',
      thumbnail: 'video2'
    },
    {
      id: 3,
      title: 'Brand Story',
      thumbnail: 'video3'
    }
  ];

  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`video-container ${isExpanded ? 'expanded' : ''}`}>
      <div className="tv-set">
        <div className="tv-screen">
          <div className="screen-content">
            {!isPlaying ? (
              <button className="play-button" onClick={togglePlay}>
                <div className="play-icon">▶</div>
              </button>
            ) : (
              <div className="playing-indicator" onClick={togglePlay}>
                <div className="video-playing-text">VIDEO PLAYING</div>
                <div className="pause-hint">Click to pause</div>
              </div>
            )}
          </div>
          <div className="screen-glare"></div>
        </div>
        <div className="tv-stand">
          <div className="stand-pole"></div>
          <div className="stand-base"></div>
        </div>
      </div>

      {isExpanded && (
        <div className="video-info">
          <h3>Videos</h3>
          <p className="current-video">{currentVideo.title}</p>
          <div className="video-list">
            {videos.map((video) => (
              <div
                key={video.id}
                className={`video-item ${video.id === currentVideo.id ? 'active' : ''}`}
                onClick={() => {
                  setCurrentVideo(video);
                  setIsPlaying(false);
                }}
              >
                <div className="video-thumbnail">
                  <span className="thumbnail-icon">🎬</span>
                </div>
                <span className="video-title">{video.title}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Video;
