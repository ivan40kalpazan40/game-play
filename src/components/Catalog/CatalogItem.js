function CatalogItem({ item, navigationChangeHandler }) {
  const onDetailsClick = (e) => {
    e.preventDefault();
    navigationChangeHandler(`/details/${item._id}`);
  };
  return (
    <div className='allGames'>
      <div className='allGames-info'>
        <img src={item.imageUrl} alt='' />
        <h6>{item.category}</h6>
        <h2>{item.title}</h2>
        <a
          href={`/details/${item._id}`}
          className='details-button'
          onClick={onDetailsClick}
        >
          Details
        </a>
      </div>
    </div>
  );
}

export default CatalogItem;
