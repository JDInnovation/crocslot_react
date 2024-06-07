import React, { useEffect, useRef } from 'react';

const JupiterSwap = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://terminal.jup.ag/main-v1.js';
    script.async = true;
    script.onload = () => {
      window.Jupiter.init({
        displayMode: 'integrated',
        integratedTargetId: 'jupiter-terminal-container',
        endpoint: 'https://example.solana-mainnet.quiknode.pro/123456/', 
        formProps: {
          fixedOutputMint: false,
        },
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="jupiter-terminal-container" ref={containerRef} style={{ width: 'auto', height: '600px', backgroundColor: 'rgba(0,0,0,0.8),', borderRadius:'10px'}}></div>;
};

export default JupiterSwap;
