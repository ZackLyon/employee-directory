import { Link, useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserContext.jsx';
import styles from './Header.css';

export default function Header() {
  const { user, setUser } = useUser();
  const history = useHistory();

  const handleClick = () => {
    setUser({});
    history.replace('/login');
  };

  return (
    <header>
      <Link to="/">
        <h1>Acme Inc.</h1>
      </Link>
      <div>
        {user.id ? (
          <div className={styles.signoutContainer}>
            <h3>{user.email}</h3>
            <button onClick={handleClick}>Sign Out</button>
          </div>
        ) : (
          <Link to="/login">
            <button>Log In</button>
          </Link>
        )}
      </div>
    </header>
  );
}
