import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { getAllUsers } from '../../common/services/users';
import { getAllPatients } from '../../common/services/patients';
import { signIn } from '../../common/services/auth';

const Admin = () => {
  const { user, isAuthenticated, getIdTokenClaims, logout } = useAuth0();

  useEffect(() => {
    getAllUsers();
    getAllPatients();
    getIdTokenClaims().then(({ __raw: idToken }) => signIn(idToken));
  }, []);

  const onLogout = () => logout({ returnTo: window.location.origin });

  return (
    isAuthenticated && (
    <div>
      <h2>{user.name}</h2>
      <span>{user.email}</span>
      <img src={user.picture} alt={user.name} />

      <button type="button" onClick={onLogout}>Logout</button>
    </div>
    )
  );
};

export default Admin;
