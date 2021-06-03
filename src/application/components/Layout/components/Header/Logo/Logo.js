import React from 'react';
import BrandImage from '../../../../../../assets/images/BrandLogo.png';
import LogoWraper from './styles';

const Logo = () => (
  <LogoWraper>
    <img src={BrandImage} alt="DoctorApp" />
  </LogoWraper>
);

export default Logo;
