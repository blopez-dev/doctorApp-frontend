import { createGlobalStyle } from 'styled-components';

import RobotoRegular from './Roboto-Regular.woff';
import RobotoRegularWoff2 from './Roboto-Regular.woff2';

import RobotoMedium from './Roboto-Medium.woff';
import RobotoMediumWoff2 from './Roboto-Medium.woff2';

import RobotoBold from './Roboto-Bold.woff';
import RobotoBoldWoff2 from './Roboto-Bold.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: 'Roboto-Regular';
    src: local('Roboto'), local('Roboto'),
    url(${RobotoRegularWoff2}) format('woff2'),
    url(${RobotoRegular}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto-Medium';
    src: local('Roboto'), local('Roboto'),
    url(${RobotoMediumWoff2}) format('woff2'),
    url(${RobotoMedium}) format('woff');
    font-weight: 500;
    font-style: normal;
  }
  
    @font-face {
        font-family: 'Roboto-Bold';
        src: local('Roboto'), local('Roboto'),
        url(${RobotoBoldWoff2}) format('woff2'),
        url(${RobotoBold}) format('woff');
        font-weight: 700;
        font-style: normal;
    }
`;
