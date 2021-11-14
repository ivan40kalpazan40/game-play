import { useEffect, useState } from 'react';
import CatalogItem from './CatalogItem';
import * as gameService from '../../services/gameServices';

const Catalog = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    gameService.getAll().then((response) => {
      setGames(response);
      setLoading(false);
    });
  }, []);
  return (
    <section id='catalog-page'>
      <h1>All Games</h1>
      {loading ? (
        <h3 className='no-articles'>Loading...</h3>
      ) : games.length > 0 ? (
        games.map((item) => <CatalogItem item={item} key={item._id} />)
      ) : (
        <h3 className='no-articles'>No articles yet</h3>
      )}

      {/* <!-- Display paragraph: If there is no games  --> */}
    </section>
  );
};

export default Catalog;
