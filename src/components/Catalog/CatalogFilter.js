import { useState } from 'react';
import Container from '../../Container/Container';
import Select from '../UI/Select';
import MyButton from '../UI/MyButton';
import axios from 'axios';
import './CatalogFilter.css';

const filterOption1 = [
  { value: '', name: 'Filter by year' },
  { value: '', name: 'All years' },
  { value: '2019', name: '2019' },
  { value: '2020', name: '2020' },
  { value: '2021', name: '2021' },
  { value: '2022', name: '2022' }
];
const filterOption2 = [
  { value: '', name: 'Filter by model' },
  { value: '', name: 'All models' },
  { value: 'Apple', name: 'Apple' },
  { value: 'Samsung', name: 'Samsung' },
  { value: 'Xiaomi', name: 'Xiaomi' },
  { value: 'Blackview', name: 'Blackview' }
];
const filterOption3 = [
  { value: '', name: 'Filter by prices' },
  { value: '', name: 'All price' },
  { value: 'less', name: 'Up to 600' },
  { value: 'more', name: 'More than 600' }
];

const CatalogFilter = (props) => {
  const [filteredYear, setFilteredYear] = useState('');
  const [filteredModel, setFilteredModel] = useState('');
  const [filteredPrice, setFilteredPrice] = useState('');

  const dropdownChangeYearHandler = (event) => {
    setFilteredYear(event.target.value);
  };

  const dropdownChangeModelHandler = (event) => {
    setFilteredModel(event.target.value);
  };

  const dropdownChangePriceHandler = (event) => {
    setFilteredPrice(event.target.value);
  };

  // const submitHandler = (event) => {
  //   event.preventDefault();

  //   const itemData = {
  //     year: filteredYear,
  //     model: filteredModel,
  //     price: filteredPrice
  //   };
  //   props.onSaveItemData(itemData);
  // };

  const submitHandler = (event) => {
    event.preventDefault();

    const itemData = {};

    if (filteredYear) {
      itemData.year = filteredYear;
    }
    if (filteredModel) {
      itemData.model = filteredModel.toLowerCase();
    }
    if (filteredPrice) {
      itemData.price = filteredPrice;
    }

    axios
      .get('http://localhost:5000/catalog', {
        params: itemData,
        timeout: 30000
      })
      .then(function (response) {
        props.onSaveItemData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className='catalogFilter'>
      <Container>
        <form onSubmit={submitHandler} className='catalogFilter__form'>
          <div>
            <Select
              items={filterOption1}
              onChange={dropdownChangeYearHandler}
            />
            <Select
              items={filterOption2}
              onChange={dropdownChangeModelHandler}
            />
            <Select
              items={filterOption3}
              onChange={dropdownChangePriceHandler}
            />
          </div>
          <MyButton type='submit' className='catalogFilter__btn'>
            Apply
          </MyButton>
        </form>
      </Container>
    </div>
  );
};

export { CatalogFilter };
