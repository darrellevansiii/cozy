import { useState, useEffect } from 'react';
import './Radio.css';

function Radio({ isExpanded }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPlaylist, setCurrentPlaylist] = useState('January 2026 Vibes');

  const playlists = [
    'January 2026 Vibes',
    'Hip Hop Essentials',
    'Cozy Late Night',
    'Creative Flow'
  ];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextPlaylist = () => {
    const currentIndex = playlists.indexOf(currentPlaylist);
    const nextIndex = (currentIndex + 1) % playlists.length;
    setCurrentPlaylist(playlists[nextIndex]);
  };

  const prevPlaylist = () => {
    const currentIndex = playlists.indexOf(currentPlaylist);
    const prevIndex = (currentIndex - 1 + playlists.length) % playlists.length;
    setCurrentPlaylist(playlists[prevIndex]);
  };

  return (
    <div className={`radio-container ${isExpanded ? 'expanded' : ''}`}>
      <div className="radio-display">
        <div className="equalizer">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className={`bar ${isPlaying ? 'playing' : ''}`}
              style={{
                animationDelay: `${i * 0.1}s`,
                height: isPlaying ? '60%' : '20%'
              }}
            />
          ))}
        </div>

        <div className="radio-controls">
          <button className="control-btn" onClick={prevPlaylist}>
            ⏮
          </button>
          <button className="control-btn play" onClick={togglePlay}>
            {isPlaying ? '⏸' : '▶'}
          </button>
          <button className="control-btn" onClick={nextPlaylist}>
            ⏭
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="playlist-info">
          <h3>Now Playing</h3>
          <p className="playlist-name">{currentPlaylist}</p>
          <div className="playlist-list">
            {playlists.map((playlist, index) => (
              <div
                key={index}
                className={`playlist-item ${playlist === currentPlaylist ? 'active' : ''}`}
                onClick={() => setCurrentPlaylist(playlist)}
              >
                {playlist}
              </div>
            ))}
          </div>
          <p className="apple-music-note">
            🎵 Powered by Apple Music
          </p>
        </div>
      )}
    </div>
  );
}

export default Radio;
