import { useEffect, useState } from 'react';
import CatalogItem from './CatalogItem';

const Catalog = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3030/data/games?sortBy=_createdOn%20desc')
      .then((res) => res.json())
      .then((response) => {
        setGames(response);
      });
  }, []);
  return (
    <section id='catalog-page'>
      <h1>All Games</h1>
      {games.length > 0 ? (
        games.map((item) => <CatalogItem item={item} key={item._id} />)
      ) : (
        <h3 className='no-articles'>No articles yet</h3>
      )}

      {/* <!-- Display paragraph: If there is no games  --> */}
    </section>
  );
};

export default Catalog;
