import './HomeAboutItem.css';

const HomeAboutItem = ({ title, text, img }) => {
  return (
    <div className='homeAboutItem'>
      <div>
        <img
          style={{ width: '130px', height: '275px' }}
          src={img}
          alt='phone'
        ></img>
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default HomeAboutItem;
