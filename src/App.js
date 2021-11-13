import { useState, createElement } from 'react';

import Catalog from './components/Catalog';
import CreateGame from './components/CreateGame';
import Details from './components/Details';
import EditGame from './components/EditGame';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [page, setPage] = useState('/home');
  const routes = {
    '/home': <Home />,
    '/games': <Catalog />,
    '/create': <CreateGame />,
  };

  const navigationChangeHandler = (path) => {
    setPage(path);
  };
  return (
    <div id='box'>
      <Header navigationChangeHandler={navigationChangeHandler} />
      {/* <!-- Main Content --> */}
      <main id='main-content'>{routes[page] || <h2>No page found!</h2>}</main>
      <Home />
      <Login />
      <Register />
      <CreateGame />
      <EditGame />
      <Details />
      <Catalog />
    </div>
  );
}

export default App;
