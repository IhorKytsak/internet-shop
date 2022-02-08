import Container from '../../Container/Container';
import CatalogItem from './CatalogItem';
import './CatalogItems.css';

const CatalogItems = (props) => {
  return (
    <Container>
      <div className='catalogItems'>
        {props.items.map((item) => (
          <CatalogItem
            key={item.name}
            img={item.img}
            name={item.name}
            about={item.about}
            price={item.price}
          />
        ))}
      </div>
    </Container>
  );
};

export default CatalogItems;
