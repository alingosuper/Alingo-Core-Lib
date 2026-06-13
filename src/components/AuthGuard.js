import { useEffect } from 'react';

const AuthGuard = ({ children }) => {
  useEffect(() => {
    const token = localStorage.getItem('alingo_token');
    if (!token) {
      window.location.href = 'https://alingo-main-gateway.com/login';
    }
  }, []);

  return <>{children}</>;
};

export default AuthGuard;
