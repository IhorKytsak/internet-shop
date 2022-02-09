import { useState } from 'react';
import MyButton from '../UI/MyButton';
import './HomeAbout.css';
import HomeAboutItem from './HomeAboutItem';

const homeItems = [
  {
    title: 'Premium phones',
    text: 'We have the best flagship smartphones available at affordable prices and convenient payment methods for you',
    img: require('../../img/premium-phone.jpg')
  },
  {
    title: 'Economic phones',
    text: 'We have budget phones for every taste at a competitive price and a one-year warranty.',
    img: require('../../img/economic-phone.jpg')
  },
  {
    title: 'Basic phones',
    text: 'We have a wide selection of push-button phones for your family, for active recreation, or for use at work.',
    img: require('../../img/basic-phones.jpg')
  }
];

const homeShowItems = [
  {
    title: 'Demo-tablets',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis.!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis.!',
    img: require('../../img/tablet.png')
  },
  {
    title: 'Demo-tablets',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis.!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis.!',
    img: require('../../img/tablet.png')
  },
  {
    title: 'Demo-tablets',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis.!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis.!',
    img: require('../../img/tablet.png')
  }
];

const HomeAbout = () => {
  const [currentHomeItems, setCurrentHomeItems] = useState(homeItems);

  const loadMoreHandler = () => {
    setCurrentHomeItems((previtems) => {
      return [...previtems, ...homeShowItems];
    });
  };

  return (
    <div className='homeAbout'>
      <div className='homeAbout__items'>
        {currentHomeItems.map((item) => (
          <HomeAboutItem
            key={Math.random().toString()}
            title={item.title}
            text={item.text}
            img={item.img}
          />
        ))}
      </div>
      <MyButton onClick={loadMoreHandler}>View More</MyButton>
    </div>
  );
};

export default HomeAbout;
