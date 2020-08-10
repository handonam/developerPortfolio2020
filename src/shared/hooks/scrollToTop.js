import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useController } from 'react-scroll-parallax';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const { parallaxController } = useController();

  useEffect(() => {
    window.scrollTo(0, 0);
    parallaxController.update();
  }, [pathname, parallaxController]);

  return null;
}

export default ScrollToTop;
