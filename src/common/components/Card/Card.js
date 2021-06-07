import React from 'react';
import { CardWrapper, NameDoctor, SpecialityDoctor } from './styles';

const Card = ({ name, speciality }) => (

  <CardWrapper>
    <NameDoctor>
      {name}
    </NameDoctor>
    <SpecialityDoctor>
      {speciality}
    </SpecialityDoctor>
  </CardWrapper>
);

export default Card;
