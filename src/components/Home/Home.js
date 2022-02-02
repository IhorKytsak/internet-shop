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
          title='Heading1'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cumque
          facilis, dolores illo commodi placeat totam consequuntur itaque,
          laudantium quia harum sed alias suscipit nobis corrupti voluptatibus,
          perferendis eum saepeq.'
        />
        <HomeAbout />
        <MyButton>Viev More</MyButton>
      </div>
    </Container>
  );
};

export default Home;
