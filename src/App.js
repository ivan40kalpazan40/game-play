import { useState, createElement } from 'react';

import Catalog from './components/Catalog/Catalog';
import CreateGame from './components/CreateGame';
import Details from './components/Details';
import EditGame from './components/EditGame';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import ErrorPage from './components/ErrorPage';

function App() {
  const navigationChangeHandler = (path) => {
    console.log(path);
    setPage(path);
  };

  const [page, setPage] = useState('/home');

  const router = (path) => {
    let pathNames = path.split('/');
    let rootPath = pathNames[1];
    let argument = pathNames[2];

    const routes = {
      home: <Home />,
      games: <Catalog navigationChangeHandler={navigationChangeHandler} />,
      create: <CreateGame />,
      login: <Login />,
      register: <Register />,
      details: <Details id={argument} />,
    };
    return routes[rootPath];
  };

  return (
    <div id='box'>
      <Header navigationChangeHandler={navigationChangeHandler} />
      <main id='main-content'>
        {router(page) || <ErrorPage>An error occured</ErrorPage>}
      </main>
    </div>
  );
}

export default App;
