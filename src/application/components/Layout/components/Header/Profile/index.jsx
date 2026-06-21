import React from 'react';
import Avatar from './Avatar/Avatar';
import UserProfile from './UserProfile/UserProfile';
import ProfileWrapper from './styles';

const Profile = () => (
  <ProfileWrapper>
    <Avatar />
    <UserProfile />
  </ProfileWrapper>
);

export default Profile;
