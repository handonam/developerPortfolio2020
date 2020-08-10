import React from 'react';

// Needed to fix a caching issue with Parallax 
// (https://www.npmjs.com/package/react-scroll-parallax#example-usage-of-context)
import ParallaxCache from '../../shared/hooks/parallaxCache.jsx';

const Contact = () => {
  return (
    <>
      <ParallaxCache />
      <section>
        There's nothing here yet! But that's coming soon!
      </section>
    </>
  );
}

export default Contact;
