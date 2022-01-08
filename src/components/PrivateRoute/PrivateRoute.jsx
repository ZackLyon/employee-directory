import { Route, useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserContext.jsx';

export default function PrivateRoute({ children }) {
  const { user } = useUser();
  const history = useHistory();

  return <Route>{user.id ? children : history.replace('/login')}</Route>;
}
