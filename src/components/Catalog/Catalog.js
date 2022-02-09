import { useState } from 'react';
import CatalogFilter from './CatalogFilter';
import CatalogItems from './CatalogItems';
import { CATALOG_ITEMS } from './MyCatalogItems';

const Catalog = (props) => {
  const [filteredItems, setFilteredItems] = useState(CATALOG_ITEMS);

  const filteredItemsHandler = (filterData) => {
    setFilteredItems(CATALOG_ITEMS);
    if (filterData.year) {
      setFilteredItems((prevItems) => {
        return prevItems.filter((item) => {
          return item.about.match(/\d\d\d\d/).toString() === filterData.year;
        });
      });
    }
    if (filterData.model) {
      setFilteredItems((prevItems) => {
        return prevItems.filter((item) => {
          return item.name.match(/^[a-zA-Z]+/).toString() === filterData.model;
        });
      });
    }
    if (filterData.price) {
      setFilteredItems((prevItems) => {
        return prevItems.filter((item) => {
          let moreOrLess = item.price.match(/^[\d]+/) >= 600 ? 'more' : 'less';
          return moreOrLess === filterData.price;
        });
      });
    }
  };

  return (
    <div className='catalog'>
      <CatalogFilter onSaveItemData={filteredItemsHandler} />
      {filteredItems.length > 0 ? (
        <CatalogItems items={filteredItems} />
      ) : (
        <h2 style={{ textAlign: 'center', margin: '200px 0' }}>
          Products not found
        </h2>
      )}
    </div>
  );
};

export default Catalog;
