import { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { signInUser, signUpUser, getUser } from '../../services/users.js';
import { getProfile } from '../../services/profiles.js';
import { useUser } from '../../context/UserContext.jsx';
import style from './Auth.css';

export default function Auth() {
  const location = useLocation();
  const history = useHistory();
  const isRegistered = location.pathname === '/login';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useUser();

  const checkForProfile = async () => {
    try {
      const profile = await getProfile();
      return profile;
    } catch {
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || password.length < 8) {
      throw new Error(
        'An email and password of greater than 8 characters are necessary.'
      );
    }
    try {
      if (isRegistered) {
        const existingUser = await signInUser(email, password);
        setUser(existingUser);

        const hasProfile = await checkForProfile();
        hasProfile
          ? history.replace('/profile')
          : history.replace('/profile/create');
      } else {
        await signUpUser();
        history.replace('/confirm');
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className={style.authView}>
      <h1>{isRegistered ? 'Log In' : 'Sign Up'}</h1>
      <form onSubmit={handleSubmit}>
        <div className={style.alignFields}>
          <label htmlFor="email">Email: </label>
          <input
            name="email"
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>
        <div className={style.alignFields}>
          <label htmlFor="password">Password: </label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <div className={style.centered}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
