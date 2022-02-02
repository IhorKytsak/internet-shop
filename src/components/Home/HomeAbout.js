import './HomeAbout.css';
import HomeAboutItem from './HomeAboutItem';

const HomeAbout = () => {
  return (
    <div className='homeAbout'>
      <HomeAboutItem
        title='Heading1'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cumque
        facilis, dolores illo commodi placeat totam consequuntur itaque'
      />
      <HomeAboutItem
        title='Heading2'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cumque
        facilis, dolores illo commodi placeat totam consequuntur itaque'
      />
      <HomeAboutItem
        title='Heading3'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cumque
        facilis, dolores illo commodi placeat totam consequuntur itaque'
      />
    </div>
  );
};

export default HomeAbout;
