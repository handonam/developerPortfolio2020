import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

import Hero from "../../components/Hero/index.jsx";
import Projects from "../../components/Projects/index.jsx";


const Home = () => {
  return (
    <ParallaxProvider>
      <Hero />
      <Projects />
    </ParallaxProvider>
  );
}

export default Home;
