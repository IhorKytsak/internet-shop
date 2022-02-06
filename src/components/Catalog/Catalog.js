import CatalogFilter from './CatalogFilter';
import CatalogItems from './CatalogItems';

const Catalog = () => {
  return (
    <div className='catalog'>
      <CatalogFilter />
      <CatalogItems />
    </div>
  );
};

export default Catalog;
