import MyButton from '../UI/MyButton';
import { Link } from 'react-router-dom';
import './CatalogItem.css';

const CatalogItem = (props) => {
  return (
    <div className='catalogItem'>
      <div className='catalogItem__img'>
        <img src={props.img} alt='phone-img' />
      </div>
      <div className='catalogItem__name'>{props.name}</div>
      <div className='catalogItem__about'>{props.about}</div>
      <div className='catalogItem__price'>
        <div className='catalogItem__priceLeft'>Price:</div>
        <div className='catalogItem__priceRight'>{props.price}</div>
      </div>
      <Link to={'/catalog/' + props.name}>
        <MyButton className='catalogItem__MyBtn'>View more</MyButton>
      </Link>
    </div>
  );
};

export default CatalogItem;
