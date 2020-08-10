import React from 'react';

// Needed to fix a caching issue with Parallax 
// (https://www.npmjs.com/package/react-scroll-parallax#example-usage-of-context)
import ParallaxCache from '../../shared/hooks/parallaxCache.jsx';

import Hero from "../../components/Hero/index.jsx";
import Projects from "../../components/Projects/index.jsx";

const Home = () => {
  return (
    <>
      <ParallaxCache />
      <Hero />
      <Projects />
    </>
  );
}

export default Home;
