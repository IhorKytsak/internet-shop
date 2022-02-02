import './HomeAboutItem.css';

const HomeAboutItem = ({ title, text }) => {
  return (
    <div className='homeAboutItem'>
      <div>
        <img src={require('../../img/cat.jpg')}></img>
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default HomeAboutItem;
