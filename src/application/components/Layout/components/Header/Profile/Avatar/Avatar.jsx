import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { AvatarProfile, AvatarImage } from './styles';

const Avatar = () => {
  const { user } = useAuth0();
  return (
    <AvatarProfile>
      <AvatarImage src={user.picture} alt={user.name} />
    </AvatarProfile>
  );
};

export default Avatar;
