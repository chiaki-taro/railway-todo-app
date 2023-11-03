import React from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../authSlice';
import './header.scss';

export const Header = () => {
  const auth = useSelector((state) => state.auth.isSignIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies();
  const handleSignOut = () => {
    dispatch(signOut());
    removeCookie('token');
    navigate('/signin');
  };

  return (
    <header className="header">
      <Link to="/" className="home-link">
        <h1>Todoアプリ</h1>
      </Link>
      {auth ? (
        <button onClick={handleSignOut} className="sign-out-button">
          サインアウト
        </button>
      ) : (
        <></>
      )}
    </header>
  );
};
