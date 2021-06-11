import { useState, useEffect } from 'react';
import { fromDesktop, isMobile, isTablet, isMiddleTablet } from 'common/styles/breakpoints';
import breakpoint from 'common/enums/breakpoint';

const getBreakpoints = () => {
  const isMobileBr = [window.matchMedia(isMobile).matches, breakpoint.MOBILE];
  const isTabletBr = [window.matchMedia(isTablet).matches, breakpoint.TABLET];
  const isMiddleTabletBr = [window.matchMedia(isMiddleTablet).matches, breakpoint.MIDDLE_TABLET];
  const isDesktopBr = [window.matchMedia(fromDesktop).matches, breakpoint.DESKTOP];

  const [, current] = [isMobileBr, isMiddleTabletBr, isTabletBr, isDesktopBr]
    .find(([active]) => active);

  return {
    isMobile: isMobileBr[0],
    isTablet: isTabletBr[0],
    isMiddleTablet: isMiddleTabletBr[0],
    isDesktop: isDesktopBr[0],
    current
  };
};

const useBreakpoints = () => {
  const [breakpoints, setBreakpoints] = useState(getBreakpoints());

  useEffect(() => {
    const onResize = () => setBreakpoints(getBreakpoints());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return breakpoints;
};

export default useBreakpoints;
