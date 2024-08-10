import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const AuthGuard = ({ component }) => {
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkToken();
  }, [component]);

  const checkToken = () => {
    const tokenExists = !!Cookies.get('token'); // Check if token exists
    if (!tokenExists) {
      navigate(`/login`);
    } else {
      setStatus(true);
    }
  };

  return status ? <>{component}</> : null;
};

export default AuthGuard;