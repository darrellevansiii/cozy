import { useState } from 'react';
import './RelaxCreateModal.css';

function RelaxCreateModal({ isOpen, onClose, onCursorChange }) {
  const [fillColor, setFillColor] = useState('#ffffff');
  const [outlineColor, setOutlineColor] = useState('#4a9fd8');

  const handleFillChange = (e) => {
    setFillColor(e.target.value);
    onCursorChange(e.target.value, outlineColor);
  };

  const handleOutlineChange = (e) => {
    setOutlineColor(e.target.value);
    onCursorChange(fillColor, e.target.value);
  };

  const presetColors = [
    { fill: '#ffffff', outline: '#4a9fd8', name: 'Classic' },
    { fill: '#FFD700', outline: '#FFA500', name: 'Gold' },
    { fill: '#FF69B4', outline: '#FF1493', name: 'Pink' },
    { fill: '#00FF00', outline: '#008000', name: 'Green' },
    { fill: '#FF0000', outline: '#8B0000', name: 'Red' },
    { fill: '#9370DB', outline: '#4B0082', name: 'Purple' }
  ];

  const applyPreset = (preset) => {
    setFillColor(preset.fill);
    setOutlineColor(preset.outline);
    onCursorChange(preset.fill, preset.outline);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        <div className="modal-header">
          <h2>Relax, create.</h2>
        </div>

        <div className="modal-body">
          <section className="about-section">
            <h3>About Cozy Gallery</h3>
            <p>
              Cozy Gallery is more than just a brand—it's a creative movement.
              Born from the intersection of Hip Hop culture and high fashion,
              we create pieces that tell stories and inspire self-expression.
            </p>
            <p>
              Every collection is carefully curated by the sexiest designer in the world,
              blending timeless aesthetics with contemporary street style.
              Our mission is simple: help you look good, feel good, and create without limits.
            </p>
            <p className="tagline">
              "Please relax. Please create."
            </p>
          </section>

          <section className="cursor-section">
            <h3>Customize Your Cursor</h3>
            <p className="cursor-note">Desktop only feature</p>

            <div className="cursor-preview">
              <div className="preview-box">
                <svg width="60" height="60" viewBox="0 0 40 40">
                  <g>
                    <ellipse cx="20" cy="24" rx="12" ry="8" fill={fillColor} stroke={outlineColor} strokeWidth="2" opacity="0.6" />
                    <ellipse cx="14" cy="22" rx="8" ry="6" fill={fillColor} stroke={outlineColor} strokeWidth="2" opacity="0.6" />
                    <ellipse cx="26" cy="22" rx="8" ry="6" fill={fillColor} stroke={outlineColor} strokeWidth="2" opacity="0.6" />
                    <ellipse cx="20" cy="18" rx="10" ry="7" fill={fillColor} stroke={outlineColor} strokeWidth="2" opacity="0.6" />
                    <rect x="10" y="26" width="3" height="3" fill={outlineColor} opacity="0.4" />
                    <rect x="15" y="28" width="3" height="3" fill={outlineColor} opacity="0.4" />
                    <rect x="22" y="28" width="3" height="3" fill={outlineColor} opacity="0.4" />
                    <rect x="27" y="26" width="3" height="3" fill={outlineColor} opacity="0.4" />
                  </g>
                </svg>
                <p>Preview</p>
              </div>
            </div>

            <div className="color-controls">
              <div className="color-control">
                <label>Cloud Fill</label>
                <div className="color-input-group">
                  <input
                    type="color"
                    value={fillColor}
                    onChange={handleFillChange}
                    className="color-picker"
                  />
                  <input
                    type="text"
                    value={fillColor}
                    onChange={handleFillChange}
                    className="color-text"
                  />
                </div>
              </div>

              <div className="color-control">
                <label>Cloud Outline</label>
                <div className="color-input-group">
                  <input
                    type="color"
                    value={outlineColor}
                    onChange={handleOutlineChange}
                    className="color-picker"
                  />
                  <input
                    type="text"
                    value={outlineColor}
                    onChange={handleOutlineChange}
                    className="color-text"
                  />
                </div>
              </div>
            </div>

            <div className="preset-colors">
              <p>Presets:</p>
              <div className="preset-grid">
                {presetColors.map((preset, index) => (
                  <button
                    key={index}
                    className="preset-button"
                    onClick={() => applyPreset(preset)}
                    title={preset.name}
                  >
                    <div
                      className="preset-color"
                      style={{
                        background: preset.fill,
                        border: `3px solid ${preset.outline}`
                      }}
                    />
                    <span>{preset.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default RelaxCreateModal;
