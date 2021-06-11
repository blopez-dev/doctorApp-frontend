export const mobileStartWidth = 480;
export const tabletStartWidth = 700;
export const tabletMiddleWidth = 800;
export const desktopStartWidth = 1024;
export const xDesktopStartWidth = 1200;
export const xxDesktopStartWidth = 1440;

/** Raw media queries */
// - Mobile
export const isMobile = `(max-width: ${tabletStartWidth}px)`;
export const fromMobile = `(min-width: ${mobileStartWidth}px)`;
// - Tablet
export const isTablet = `(min-width: ${tabletStartWidth}px) and (max-width: ${desktopStartWidth}px)`;
export const isMiddleTablet = `(min-width: ${tabletStartWidth}px) and (max-width: ${tabletMiddleWidth}px)`;
export const fromMiddleTablet = `(min-width: ${tabletMiddleWidth}px)`;
export const fromTablet = `(min-width: ${tabletStartWidth}px)`;
// - Desktop
export const fromDesktop = `(min-width: ${desktopStartWidth}px)`;

/** Style media queries */
// - Mobile
export const mobileOnly = `@media ${isMobile}`;
export const mobile = `@media ${fromMobile}`;
// - Tablet
export const tabletOnly = `@media ${isTablet}`;
export const middleTablet = `@media ${fromMiddleTablet}`;
export const tablet = `@media ${fromTablet}`;
// - Desktop
export const desktop = `@media ${fromDesktop}`;
export const xDesktop = `@media (min-width: ${xDesktopStartWidth}px)`;
export const xxDesktop = `@media (min-width: ${xxDesktopStartWidth}px)`;
