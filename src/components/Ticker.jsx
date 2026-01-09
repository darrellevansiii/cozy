import { useState, useEffect } from 'react';

function Ticker() {
  const [currentTime, setCurrentTime] = useState('');
  const [verseOfDay, setVerseOfDay] = useState('Loading verse...');

  useEffect(() => {
    // Update Brooklyn time every second
    const updateTime = () => {
      const now = new Date();
      const brooklynTime = now.toLocaleTimeString('en-US', {
        timeZone: 'America/New_York',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
      setCurrentTime(brooklynTime);
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    // Fetch verse of the day (using a simple Bible API)
    fetch('https://beta.ourmanna.com/api/v1/get/?format=json')
      .then(res => res.json())
      .then(data => {
        if (data?.verse?.details?.text) {
          setVerseOfDay(`${data.verse.details.text} - ${data.verse.details.reference}`);
        }
      })
      .catch(() => {
        setVerseOfDay('For I know the plans I have for you, declares the Lord - Jeremiah 29:11');
      });

    return () => clearInterval(timeInterval);
  }, []);

  const tickerText = 'from the mind of the sexiest designer in the world. Hip Hop is the culture. Please relax. Please create.';

  return (
    <div className="ticker-container">
      <div className="ticker-content">
        <span className="ticker-item">{tickerText}</span>
        <span className="ticker-item">⏰ Brooklyn Time: {currentTime}</span>
        <span className="ticker-item">📖 {verseOfDay}</span>
        <span className="ticker-item">{tickerText}</span>
        <span className="ticker-item">⏰ Brooklyn Time: {currentTime}</span>
        <span className="ticker-item">📖 {verseOfDay}</span>
      </div>
    </div>
  );
}

export default Ticker;
