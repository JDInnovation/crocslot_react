import React from 'react';

import useScreenSize from '../../hooks/useWindowSize';

function Banner({children, component}) {

    const { isMobile, isTablet } = useScreenSize();

    return (
        <div className={`banner ${component}`}>
            <div className={`w-100 h-100 max-width align-center justify-around ${isMobile ? 'd-flex-col-r' : 'd-flex-row'} ${isTablet ? 'd-flex-col' : 'd-flex-row'}`}>
                {children}
            </div>
        </div>
    );
  }
  
  export default Banner;