import Container from '../../Container/Container';
import Select from '../UI/Select';
import MyButton from '../UI/MyButton';
import './CatalogFilter.css';

const filterOption1 = [
  { value: 'Filter 1' },
  { value: '2019' },
  { value: '2020' },
  { value: '2021' },
  { value: '2022' }
];
const filterOption2 = [
  { value: 'Filter 2' },
  { value: 'Xiaomi' },
  { value: 'Apple' },
  { value: 'Samsung' }
];
const filterOption3 = [
  { value: 'Filter 3' },
  { value: 'Cheap' },
  { value: 'Expensive' }
];

const CatalogFilter = () => {
  return (
    <div className='catalogFilter'>
      <Container>
        <form className='catalogFilter__form'>
          <div>
            <Select items={filterOption1} defaultValue='Filter 1' />
            <Select items={filterOption2} defaultValue='Filter 2' />
            <Select items={filterOption3} defaultValue='Filter 3' />
          </div>
          <MyButton type='submit' className='catalogFilter__btn'>
            Apply
          </MyButton>
        </form>
      </Container>
    </div>
  );
};

export default CatalogFilter;
