import { useState, useEffect, useCallback } from 'react';

export const useWindowWidth = () => {
  // хук для определения текущей ширины экрана

  const initialScreenWidth =useCallback(() => window.innerWidth, []);
  const [windowWidth, setWindowWidth] = useState(initialScreenWidth);

  useEffect(() => {
    const handleResize = () => {
      let timeOutHandler;
      clearTimeout(timeOutHandler); // подчистка таймера

      timeOutHandler = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 300);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
};
