import { useState, useEffect } from 'react';

function useScreenSize() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia('(max-width: 768px)');
    const tabletMediaQuery = window.matchMedia('(min-width: 769px) and (max-width: 1200px)');

    setIsMobile(mobileMediaQuery.matches);
    setIsTablet(tabletMediaQuery.matches);

    const mobileHandler = (event) => setIsMobile(event.matches);
    const tabletHandler = (event) => setIsTablet(event.matches);

    mobileMediaQuery.addListener(mobileHandler);
    tabletMediaQuery.addListener(tabletHandler);

    return () => {
      mobileMediaQuery.removeListener(mobileHandler);
      tabletMediaQuery.removeListener(tabletHandler);
    };
  }, []);

  return { isMobile, isTablet };
}

export default useScreenSize;
