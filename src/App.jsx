import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserProvider } from './context/UserContext.jsx';
import Header from './components/Header/Header.jsx';
import Auth from './views/Auth/Auth.jsx';
import Confirm from './views/Auth/Confirm.jsx';
import Home from './views/Home/Home.jsx';
import Profile from './views/Profile/Profile.jsx';
import CreateProfile from './views/Profile/CreateProfile.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import './App.css';

export default function App() {
  return (
    <Router>
      <UserProvider>
        <Header />
        <Switch>
          <Route path="/register">
            <Auth />
          </Route>
          <Route path="/login">
            <Auth />
          </Route>
          <Route path="/confirm">
            <Confirm />
          </Route>
          <PrivateRoute exact path="/profile/create">
            <CreateProfile />
          </PrivateRoute>
          <PrivateRoute exact path="/profile/edit">
            <CreateProfile />
          </PrivateRoute>
          <PrivateRoute exact path="/profile">
            <Profile />
          </PrivateRoute>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </UserProvider>
    </Router>
  );
}
