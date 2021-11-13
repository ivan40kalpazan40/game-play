function CatalogItem({ item }) {
  return (
    <div className='allGames'>
      <div className='allGames-info'>
        <img src={item.imageUrl} alt='' />
        <h6>{item.category}</h6>
        <h2>{item.title}</h2>
        <a href='http://abv.bg' className='details-button'>
          Details
        </a>
      </div>
    </div>
  );
}

export default CatalogItem;
