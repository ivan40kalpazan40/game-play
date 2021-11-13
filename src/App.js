import { useState, createElement } from 'react';

import Catalog from './components/Catalog';
import CreateGame from './components/CreateGame';
import Details from './components/Details';
import EditGame from './components/EditGame';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import ErrorPage from './components/ErrorPage';

function App() {
  const [page, setPage] = useState('/home');
  const routes = {
    '/home': <Home />,
    '/games': <Catalog />,
    '/create': <CreateGame />,
    '/login': <Login />,
    '/register': <Register />,
  };

  const navigationChangeHandler = (path) => {
    setPage(path);
  };
  return (
    <div id='box'>
      <Header navigationChangeHandler={navigationChangeHandler} />
      <main id='main-content'>
        {routes[page] || <ErrorPage>An error occured</ErrorPage>}
      </main>
    </div>
  );
}

export default App;
