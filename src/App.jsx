import { useState } from 'react';
import './App.css';
import Ticker from './components/Ticker';
import CustomCursor from './components/CustomCursor';
import Shop from './components/Shop';
import Radio from './components/Radio';
import Video from './components/Video';
import LookBook from './components/LookBook';
import RelaxCreateModal from './components/RelaxCreateModal';
import CartModal from './components/CartModal';
import { useShopify } from './context/ShopifyContext';

function AppContent() {
  const [expandedApp, setExpandedApp] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cursorColors, setCursorColors] = useState({
    fill: '#ffffff',
    outline: '#4a9fd8'
  });

  const { cartCount } = useShopify();

  const toggleExpand = (appName) => {
    setExpandedApp(expandedApp === appName ? null : appName);
  };

  const handleCursorChange = (fill, outline) => {
    setCursorColors({ fill, outline });
  };

  return (
    <div className="app">
      <CustomCursor fillColor={cursorColors.fill} outlineColor={cursorColors.outline} />

      <Ticker />

      <div className="header">
        <div className="logo-container">
          <img
            src="/images/cozy-logo.png"
            alt="Cozy Gallery"
            className="cozy-logo-image"
          />
        </div>
        <button
          className="bag-button"
          title="Shopping Bag"
          onClick={() => setIsCartOpen(true)}
        >
          Bag{cartCount > 0 && <span className="bag-count">{cartCount}</span>}
        </button>
      </div>

      <div className="main-content">
        {/* Shop Window */}
        <div className={`app-window ${expandedApp === 'shop' ? 'expanded' : ''}`}>
          <div className="app-header">
            <h2 className="app-title">Shop</h2>
            <button
              className="expand-button"
              onClick={() => toggleExpand('shop')}
              title={expandedApp === 'shop' ? 'Minimize' : 'Expand'}
            >
              {expandedApp === 'shop' ? '−' : '+'}
            </button>
          </div>
          <div className="app-content">
            <Shop isExpanded={expandedApp === 'shop'} />
          </div>
        </div>

        {/* Radio Window */}
        <div className={`app-window ${expandedApp === 'radio' ? 'expanded' : ''}`}>
          <div className="app-header">
            <h2 className="app-title">Radio</h2>
            <button
              className="expand-button"
              onClick={() => toggleExpand('radio')}
              title={expandedApp === 'radio' ? 'Minimize' : 'Expand'}
            >
              {expandedApp === 'radio' ? '−' : '+'}
            </button>
          </div>
          <div className="app-content">
            <Radio isExpanded={expandedApp === 'radio'} />
          </div>
        </div>

        {/* Video Window */}
        <div className={`app-window ${expandedApp === 'video' ? 'expanded' : ''}`}>
          <div className="app-header">
            <h2 className="app-title">Video</h2>
            <button
              className="expand-button"
              onClick={() => toggleExpand('video')}
              title={expandedApp === 'video' ? 'Minimize' : 'Expand'}
            >
              {expandedApp === 'video' ? '−' : '+'}
            </button>
          </div>
          <div className="app-content">
            <Video isExpanded={expandedApp === 'video'} />
          </div>
        </div>

        {/* Look Book Window */}
        <div className={`app-window ${expandedApp === 'lookbook' ? 'expanded' : ''}`}>
          <div className="app-header">
            <h2 className="app-title">Look Book</h2>
            <button
              className="expand-button"
              onClick={() => toggleExpand('lookbook')}
              title={expandedApp === 'lookbook' ? 'Minimize' : 'Expand'}
            >
              {expandedApp === 'lookbook' ? '−' : '+'}
            </button>
          </div>
          <div className="app-content">
            <LookBook isExpanded={expandedApp === 'lookbook'} />
          </div>
        </div>
      </div>

      <div className="bottom-section">
        <img
          src="/images/relax-create.png"
          alt="Relax, create."
          className="relax-create-button"
          onClick={() => setIsModalOpen(true)}
        />
      </div>

      <div className="footer">
        <span>Cozy Gallery LLC</span>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-icon"
          title="Follow us on Instagram"
        >
          📷
        </a>
      </div>

      <RelaxCreateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCursorChange={handleCursorChange}
      />

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </div>
  );
}

export default AppContent;
