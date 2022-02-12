import MyButton from '../UI/MyButton';
import { Link } from 'react-router-dom';
import './CatalogItem.css';

const CatalogItem = (props) => {
  return (
    <div className='catalogItem'>
      <div className='catalogItem__img'>
        <img
          src={require('../../img/catalog/' + props.img + '.jpg')}
          alt='phone-img'
        />
      </div>
      <div className='catalogItem__name'>{props.name}</div>
      <div className='catalogItem__about'>{props.about}</div>
      <div className='catalogItem__price'>
        <div className='catalogItem__priceLeft'>Price:</div>
        <div className='catalogItem__priceRight'>{props.price}.00 €</div>
      </div>
      <Link to={'/catalog/' + props.name}>
        <MyButton className='catalogItem__MyBtn'>View more</MyButton>
      </Link>
    </div>
  );
};

export default CatalogItem;
