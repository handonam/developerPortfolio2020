import React from 'react';

const useWindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = React.useState({
    width: undefined,
    height: undefined,
  });

  function debounce(fn, ms) {
    let timer
    return _ => {
      clearTimeout(timer)
      timer = setTimeout(_ => {
        timer = null
        fn.apply(this, arguments)
      }, ms)
    };
  }
  
  React.useEffect(() => {
    // Handler to call on window resize
     const debouncedHandleResize = debounce(function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 500);
    
    // Add event listener
    window.addEventListener("resize", debouncedHandleResize);
    
    // Call handler right away so state gets updated with initial window size
    debouncedHandleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", debouncedHandleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

export default useWindowSize;
