import { useState } from 'react';
import { CatalogFilter } from './CatalogFilter';
import CatalogItems from './CatalogItems';
import axios from 'axios';
import Loader from '../Loader/Loader';

const Catalog = () => {
  const [filteredItems, setFilteredItems] = useState(initialItems);
  const [isFetching, setIsFetching] = useState(true);

  function initialItems() {
    return axios
      .get('http://localhost:5000/catalog')
      .then(function (response) {
        setTimeout(() => {
          setFilteredItems(response.data);
          setIsFetching(false);
        }, 1500);
      })
      .catch(function (error) {
        console.log(error, error.message);
      });
  }

  const filteredItemsHandler = (filterData) => {
    setIsFetching(true);

    setTimeout(() => {
      setFilteredItems(filterData);
      setIsFetching(false);
    }, 1500);

    // setFilteredItems(CATALOG_ITEMS);
    // if (filterData.year) {
    //   setFilteredItems((prevItems) => {
    //     return prevItems.filter((item) => {
    //       return item.about.match(/\d\d\d\d/).toString() === filterData.year;
    //     });
    //   });
    // }
    // if (filterData.model) {
    //   setFilteredItems((prevItems) => {
    //     return prevItems.filter((item) => {
    //       return item.name.match(/^[a-zA-Z]+/).toString() === filterData.model;
    //     });
    //   });
    // }
    // if (filterData.price) {
    //   setFilteredItems((prevItems) => {
    //     return prevItems.filter((item) => {
    //       let moreOrLess = item.price.match(/^[\d]+/) >= 600 ? 'more' : 'less';
    //       return moreOrLess === filterData.price;
    //     });
    //   });
    // }
  };

  return (
    <div className='catalog'>
      <CatalogFilter onSaveItemData={filteredItemsHandler} />

      {isFetching && <Loader />}

      {filteredItems.length > 0 && !isFetching && (
        <CatalogItems items={filteredItems} />
      )}

      {filteredItems.length === 0 && !isFetching && (
        <h2 style={{ textAlign: 'center', margin: '200px 0' }}>
          Products not found
        </h2>
      )}
    </div>
  );
};

export default Catalog;
