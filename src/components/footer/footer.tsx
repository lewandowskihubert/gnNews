import React, { useState, useEffect } from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectNewsList } from '../../slices/news-slice';
import './footer.css'; // import the CSS file

const Footer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>(new Date().toLocaleTimeString());
  const newsData = useAppSelector(selectNewsList);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer-container">
      <span className="current-time">Current time: {currentTime}</span>
      <span className='number-articles'>Number of articles:{newsData.length.toLocaleString()}</span>
    </footer>
  );
};

export default Footer;