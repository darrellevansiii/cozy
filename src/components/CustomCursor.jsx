import { useState, useEffect } from 'react';

function CustomCursor({ fillColor, outlineColor }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    if (!isMobile) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  if (isMobile || !isVisible) return null;

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <svg width="40" height="40" viewBox="0 0 40 40">
        {/* Cloud shape */}
        <g>
          {/* Main cloud body */}
          <ellipse cx="20" cy="24" rx="12" ry="8" fill={fillColor} stroke={outlineColor} strokeWidth="2" opacity="0.6" />
          <ellipse cx="14" cy="22" rx="8" ry="6" fill={fillColor} stroke={outlineColor} strokeWidth="2" opacity="0.6" />
          <ellipse cx="26" cy="22" rx="8" ry="6" fill={fillColor} stroke={outlineColor} strokeWidth="2" opacity="0.6" />
          <ellipse cx="20" cy="18" rx="10" ry="7" fill={fillColor} stroke={outlineColor} strokeWidth="2" opacity="0.6" />

          {/* Pixel-style dots */}
          <rect x="10" y="26" width="3" height="3" fill={outlineColor} opacity="0.4" />
          <rect x="15" y="28" width="3" height="3" fill={outlineColor} opacity="0.4" />
          <rect x="22" y="28" width="3" height="3" fill={outlineColor} opacity="0.4" />
          <rect x="27" y="26" width="3" height="3" fill={outlineColor} opacity="0.4" />
        </g>
      </svg>
    </div>
  );
}

export default CustomCursor;
