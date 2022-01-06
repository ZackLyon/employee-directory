import Header from './components/Header/Header.jsx';
import Home from './views/Home/Home.jsx';

export default function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
