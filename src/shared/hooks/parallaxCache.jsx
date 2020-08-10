import React from 'react';

import { useController } from 'react-scroll-parallax';

const ParallaxCache = () => {
    const { parallaxController } = useController();
 
    React.useLayoutEffect(() => {
        const handler = () => {
          parallaxController.update();
          
          // recommended by 
          // https://github.com/jscottsmith/react-scroll-parallax/issues/63#issuecomment-532475855
          window.scrollBy(0,1); 
        };
        window.addEventListener('load', handler);
        return () => {
          window.removeEventListener('load', handler);
        }
    }, [parallaxController]);
 
    return null;
};
 
 export default ParallaxCache;
