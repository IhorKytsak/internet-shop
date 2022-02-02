import Container from '../../Container/Container';
import MyButton from '../UI/MyButton';
import HomeAbout from './HomeAbout';
import HomeHeading from './HomeHeading';
import './Home.css';

const Home = () => {
  return (
    <Container>
      <div className='home'>
        <HomeHeading
          title='WHAT WE DO?'
          text='Our Online Shop gives you a chance to quickly and easily find the device you want and have it delivered to your home in no time, regardless of your location, as long as it is in one of the countries of the EU.'
        />
        <HomeAbout />
        <MyButton>Viev More</MyButton>
      </div>
    </Container>
  );
};

export default Home;
