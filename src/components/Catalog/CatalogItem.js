function CatalogItem({ item }) {
  return (
    <div className='allGames'>
      <div className='allGames-info'>
        <img src={item.imageUrl} />
        <h6>{item.category}</h6>
        <h2>{item.title}</h2>
        <a href='#' className='details-button'>
          Details
        </a>
      </div>
    </div>
  );
}

export default CatalogItem;
