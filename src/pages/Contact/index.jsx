import React from 'react';

// Needed to fix a caching issue with Parallax 
// (https://www.npmjs.com/package/react-scroll-parallax#example-usage-of-context)
import ParallaxCache from '../../shared/hooks/parallaxCache.jsx';

import ContactSection from '../../components/ContactSection/index.jsx';

const Contact = () => {
  return (
    <>
      <ParallaxCache />
      <ContactSection />
    </>
  );
}

export default Contact;
