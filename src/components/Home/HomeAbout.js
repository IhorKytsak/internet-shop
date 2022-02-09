import './HomeAbout.css';
import HomeAboutItem from './HomeAboutItem';

const HomeAbout = () => {
  return (
    <div className='homeAbout'>
      <HomeAboutItem
        title='Premium phones'
        text='We have the best flagship smartphones available at affordable prices and convenient payment methods for you '
        img={require('../../img/premium-phone.jpg')}
      />
      <HomeAboutItem
        title='Economic phones'
        text='We have budget phones for every taste at a competitive price and a one-year warranty. '
        img={require('../../img/economic-phone.jpg')}
      />
      <HomeAboutItem
        title='Basic phones'
        text='We have budget phones for every taste at a competitive price and a one-year warranty. '
        img={require('../../img/basic-phones.jpg')}
      />
      <HomeAboutItem
        title='Demo-tablets'
        text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis.!'
        img={require('../../img/tablet.png')}
      />
      <HomeAboutItem
        title='Demo-tablets'
        text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis.!'
        img={require('../../img/tablet.png')}
      />
      <HomeAboutItem
        title='Demo-tablets'
        text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis.!'
        img={require('../../img/tablet.png')}
      />

    </div>
  );
};

export default HomeAbout;
